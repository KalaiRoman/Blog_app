import mongoose from 'mongoose';



const CreateBlog_shema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    avatar: {
        type: String,
        required: [true, "Avatar is required"]
    },
    category: {
        type: String,
        required: [true, "Type is required"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'auth'
    },
    userId: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("blogs", CreateBlog_shema);