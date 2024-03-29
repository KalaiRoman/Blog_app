import mongoose from 'mongoose';
const Auth_Shema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Username is Required"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is Required"],
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
    posts: {
        type: Number,
        default: 0
    },
    avatar: {
        type: String,
    },
    profileDescription: {
        type: String
    },
    wishlist: {
        type: Array,
        default: 0
    },
    role: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

mongoose.models = {};


export default mongoose.model("auth", Auth_Shema);