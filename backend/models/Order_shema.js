import mongoose from 'mongoose';


const Order_shema = new mongoose.Schema({
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    },
    paymentMethod: {
        type: String,
        required: true
    },
    order: {
        type: Array,
        required: true,
        default: []
    },
    userid: {
        type: String,
        required: true
    },
    orderstatus: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

mongoose.models = {};


export default mongoose.model("order", Order_shema);