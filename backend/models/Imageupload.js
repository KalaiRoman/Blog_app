import mongoose from 'mongoose';


const Image_Shema = new mongoose.Schema({
    avatar: {
        type: String,
        required: true
    },
    cloud_id: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

mongoose.models = {};

export default mongoose.model("image", Image_Shema);