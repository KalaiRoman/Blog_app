import mongoose from 'mongoose';


const Otp_shema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        // required: true,
        // unique: true,

    },
    email: {
        type: String,
        required: true,
        uninque: true
    },
    otp: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    }
},
    {
        timestamps: true
    }
)

mongoose.models = {};

export default mongoose.model("otp", Otp_shema);