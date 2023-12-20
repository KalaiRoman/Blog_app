import Createblog_Shema from "../../models/Createblog_Shema.js";
import HttpError from "../../models/errorModel.js";

// create
export const Createblog = async (req, res, next) => {

    const { title, type, description, avatar, user } = req.body;
    try {

        const response = new Createblog_Shema({
            title, type, description,
            avatar,
            user: req.body.userId
        });
        response.save();
        res.status(201).json({ message: "Blog Created Successfully" })
    } catch (error) {
        return next(new HttpError("create blog error", 422))
    }
}

// edit
export const Editblog = async (req, res, next) => {
    try {

    } catch (error) {

    }
}



// single
export const Singleblog = async (req, res, next) => {
    try {

    } catch (error) {

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

// delete
export const Deleteblog = async (req, res, next) => {
    try {

    } catch (error) {

    }
}