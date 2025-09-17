import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, agreeToTerms } = req.body;
        console.log(req.body);

        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return res.status(400).json({
                message: "All fields are required",
                success: false,
            })
        }

        if (password !== confirmPassword) {
            res.status(400).json({
                message: "Password and confirm password do not match",
                success: false
            })
        }

        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(409).json({
                message: "User with this email already exists",
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(confirmPassword, 10)

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            agreeToTerms
        })

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                email: user.email
            }
        })
    } catch (error) {
        console.error(error)
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
                success: false
            })
        }

        user.failedLoginAttempts = 0;
        user.lockUntil = undefined
        await user.save()

        const token = JWT.sign({
            id: user._id,
            email: user.email,
            role: user.role
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
            success: true
        })
    }
    catch (error) {
        console.error(error)
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
