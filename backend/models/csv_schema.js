import mongoose from 'mongoose';

const csv_shema = new mongoose.Schema({
    customerId: {
        type: String,
        // required: true,
        // unique: true
    },
    firstName: {
        type: String,
        // required: true
    },
    lastName: {
        type: String,
        // required: true
    },
    company: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    country: {
        type: String,
        // required: true
    },
    phoneNo: {
        type: String,
        // required: true
    },
    alternativeContactno: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    website: {
        type: String,
        // required: true
    }

},
    {
        timestamps: true
    })

mongoose.models = {};

export default mongoose.model("csv", csv_shema);