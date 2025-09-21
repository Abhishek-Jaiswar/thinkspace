import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        console.log(req.body);

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({
                message: "User with this email already exists",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        })

        return res.status(200).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                email: user.email
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message
        });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);

        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                status: false
            })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "Account not found, Please create one!"
            })
        }

        if (user.lockUntil && user.lockUntil > Date.now()) {
            return res.status(403).json({
                success: false,
                message: `Account locked. Try again after ${Math.ceil((user.lockUntil - Date.now()) / 60000)} minutes`
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            user.failedLoginAttempts += 1;

            if (user.failedLoginAttempts >= 5) {
                user.lockUntil = Date.now() + 15 * 60 * 1000
            }

            await user.save()

            return res.status(401).json({
                message: "Invalid credentials",
                failedLoginAttempts: user.failedLoginAttempts,
                success: false
            })
        }

        user.failedLoginAttempts = 0;
        user.lockUntil = undefined
        await user.save()

        const token = JWT.sign({
            id: user._id,
            email: user.email,
            role: user.role || "user"
        },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production'
        })

        return res.status(200).json({
            message: "successfully loggedIn",
            success: true,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                bio: user.bio,
                location: user.location,
                createdAt: user.createdAt
            }
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const logout = (_, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production'
        });

        return res.status(200).json({
            success: true,
            message: "Logout successfully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong during logout"
        });
    }
}

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password -failedLoginAttempts -lockUntil");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                location: user.location,
                role: user.role,
                bio: user.bio,
                createdAt: user.createdAt
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


export const upgradeProfile = async (req, res) => {
    try {
        const { id } = req.user;
        const { bio, role, location } = req.body;

        // Ensure bio is always an array
        let updatedBio = [];
        if (typeof bio === "string") {
            updatedBio = bio.split(",").map(item => item.trim());
        } else if (Array.isArray(bio)) {
            updatedBio = bio.map(item => item.trim());
        }

        if (!bio || !role || !location) {
            return res.status(409).json({
                message: "Ohhho, you need to fill the form first",
                success: false
            });
        }

        const updatedUser = await User.findOneAndUpdate(
            { _id: id },
            { $set: { bio: updatedBio, role: 'admin', location } },
            { new: true } // This option returns the updated document
        );

        if (!updatedUser) {
            return res.status(401).json({
                message: "Unauthorized access to profile",
                success: false
            });
        }

        return res.status(200).json({
            message: "Profile upgraded to user and writer",
            success: true,
        });
    } catch (error) {
        // Handle the error more gracefully, e.g., logging it
        console.error(error);
        return res.status(500).json({
            message: "An internal server error occurred",
            success: false
        });
    }
};
