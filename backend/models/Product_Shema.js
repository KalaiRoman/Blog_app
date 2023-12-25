import mongoose from 'mongoose';


export const Product_Shema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    oldprice: {
        type: String,
        required: true
    },
    saleprice: {
        type: String,   
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbimage: {
        type: String,
        required: true
    },
    imagestore: {
        type: Array,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    }
}, {
    timestamps: true
})

export default mongoose.model("product", Product_Shema);