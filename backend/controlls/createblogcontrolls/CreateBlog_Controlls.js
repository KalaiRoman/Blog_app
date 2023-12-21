import Auth_Shema from "../../models/Auth_Shema.js";
import Createblog_Shema from "../../models/Createblog_Shema.js";
import HttpError from "../../models/errorModel.js";

// create
export const Createblog = async (req, res, next) => {

    const { title, category, description, avatar, user, userId } = req.body;
    try {

        const response = new Createblog_Shema({
            title, category, description,
            avatar,
            user: req.body.userId,
            userId: req.body.userId
        });

        const currentuser = await Auth_Shema.findById({ _id: req.body.userId });
        const updatePost = currentuser?.posts + 1;
        await Auth_Shema.findByIdAndUpdate({ _id: req.body.userId }, { posts: updatePost }, { new: true })
        response.save();
        res.status(201).json({ message: "Blog Created Successfully" })
    } catch (error) {
        return next(new HttpError("create blog error", 422))
    }
}

// edit
export const Editblog = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await Createblog_Shema.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json({ message: "Blog Updated Successfully" })

    } catch (error) {
        return next(new HttpError("Update blog error", 422))

    }
}



// single
export const Singleblog = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await Createblog_Shema.findById(id);
        res.status(200).json({ message: "success", data: response })
    } catch (error) {
        return next(new HttpError("Id blog error", 422))

    }
}


// allblogs
export const Allblogs = async (req, res, next) => {
    try {

        const response = await Createblog_Shema.find().populate("user");

        res.status(200).json({ message: "success", data: response })

    } catch (error) {
        return next(new HttpError("Get blog error", 422))

    }
}

// allblogs in particluare person blogs
export const AllblogsforCurrentUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await Createblog_Shema.find({ userId: id }).populate("user");

        res.status(200).json({ message: "success", data: response })

    } catch (error) {
        return next(new HttpError("Get blog error", 422))

    }
}

// delete
export const Deleteblog = async (req, res, next) => {

    const id = req.params.id;
    try {

        const response = await Createblog_Shema.findByIdAndDelete(id);
        const currentuser = await Auth_Shema.findById({ _id: req.userid });
        const updatePost = currentuser?.posts - 1;
        await Auth_Shema.findByIdAndUpdate({ _id: req.userid }, { posts: updatePost }, { new: true })

        res.status(200).json({ message: "Blog Deleted Successfully" })

    } catch (error) {
        return next(new HttpError("Id Missing Blog error", 422))

    }
}