import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    firstName: {
=======
    firstname: {
>>>>>>> 725a7b8a06dd4f84f04e1c4e10403ceb359ea497
        type: String,
        required: true,
        trim: true
    },
<<<<<<< HEAD
    lastName: {
=======
    lastname: {
>>>>>>> 725a7b8a06dd4f84f04e1c4e10403ceb359ea497
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
<<<<<<< HEAD
    agreeToTerms: {
        type: Boolean,
        default: false
    },
=======
>>>>>>> 725a7b8a06dd4f84f04e1c4e10403ceb359ea497
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    failedLoginAttempts: {
        type: Number,
        default: 0
    },
    lockUntil: {
        type: Date
    }
<<<<<<< HEAD
}, { timestamps: true });
=======
}, {timestamps: true});
>>>>>>> 725a7b8a06dd4f84f04e1c4e10403ceb359ea497

export const User = mongoose.model('User', userSchema);