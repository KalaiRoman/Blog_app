import mongoose from 'mongoose';


const Mail_shema = new mongoose.Schema({
    mailusers: {
        type: Array,
        default: [],
        required: true
    },
    subjectTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mailimage: {
        type: String,
        required: true
    },
    senderName: {
        type: String,
    }
},
    {
        timestamps: true
    })

mongoose.models = {};
export default mongoose.model("mail", Mail_shema);