import mongoose from "mongoose";


export const Resume_shema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    personDetails: {
        type: Array,
    },
    Educations: {
        type: Array,
    },
    Skills: {
        type: Array
    },
    Projects: {
        type: Array
    },
    Hobbies: {
        type: Array
    },
    Languages: {
        type: Array
    },
    WorkExperience: {
        type: Array
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    }
},
    {
        timestamps: true
    })

mongoose.model = {};

export default mongoose.model("resume", Resume_shema)