import mongoose from 'mongoose';


const Cart_shema = new mongoose.Schema({
    cartId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    productId: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

mongoose.models = {};


export default mongoose.model("cart", Cart_shema);