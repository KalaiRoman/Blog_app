import mongoose from 'mongoose';
const Favorts_shema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    userid: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    },
},
    {
        timestamps: true
    })

export default mongoose.model("favorts", Favorts_shema);