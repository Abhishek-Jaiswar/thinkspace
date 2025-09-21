import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.cookies?.token; // ✅ use req.cookies

    if (!token) {
        return res.status(401).json({
            message: "No token, no access",
            success: false,
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // attach user payload to req
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
            success: false,
        });
    }
};
