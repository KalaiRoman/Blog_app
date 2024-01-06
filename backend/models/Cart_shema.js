import mongoose from 'mongoose';


const Cart_shema = new mongoose.Schema({
    cartId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

export default mongoose.model("cart", Cart_shema);