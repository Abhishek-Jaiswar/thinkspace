import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 16
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    bio: {
        type: [String],
        trim: true,
        default: []
    },
    location: {
        type: String,
        trim: true
    },
    failedLoginAttempts: {
        type: Number,
        default: 0
    },
    lockUntil: {
        type: Date
    },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);