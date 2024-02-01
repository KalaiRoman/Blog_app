import mongoose from 'mongoose';


export const Product_Shema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
        trim: true
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
        required: true,
        trim: true
    },
    thumbimage: {
        type: String,
        required: true
    },
    imagestore: {
        type: Array,
        required: true,
        default: []
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
    },
    userquantity: {
        type: String,
        default: "1"
    }
}, {
    timestamps: true
})

mongoose.models = {};


export default mongoose.model("product", Product_Shema);