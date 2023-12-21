import Auth_Shema from "../../models/Auth_Shema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import HttpError from './../../models/errorModel.js';
import Createblog_Shema from "../../models/Createblog_Shema.js";

// register
export const AuthRegister = async (req, res, next) => {
    const { userName, email, password, posts, avatar, profileDescription } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hashSync(password, salt);
        const response = await Auth_Shema({
            userName,
            email,
            password: hashPassword,
            posts: 0,
            avatar: "",
            profileDescription: ""
        });
        await response.save();
        res.status(201).json({ message: "User Register Successfully", user: response });
    } catch (error) {
        return next(new HttpError('User Already Register', 422))
    }
}

// login
export const AuthLogin = async (req, res, next) => {
    const { userNameorEmail, password } = req.body;
    try {
        const existemail = await Auth_Shema.findOne({
            $or: [{
                "email": userNameorEmail
            }, {
                "userName": userNameorEmail
            }]
        });
        if (existemail) {
            const hashPassword = await bcrypt.compare(password, existemail.password);

            if (hashPassword) {
                const token = await jwt.sign({ id: existemail?._id?.toString(), expireIn: "2h" }, process.env.TOKENID);
                res.status(200).json({ message: "User Login Successfully", user: existemail, token });
            }
            else {
                res.status(404).json({ message: "Wrong Password" });

            }
        }
        else {
            res.status(404).json({ message: "User dosn't Exist", });
        }

    } catch (error) {
        res.status(404).json({ message: "User Not Found", });
    }
}

// single user
export const GetSingleUserData = async (req, res, next) => {
    const id = req.params.id;
    try {
        if (id) {
            const response = await Auth_Shema.findById({ _id: id });
            if (response) {
                await res.status(200).json({ message: "success", data: response });
            }
            else {
                await res.status(404).json({ message: "User Id Not Found", });
            }
        }

    } catch (error) {
        res.status(404).json({ message: "User Id Not Found", });
    }
}

// single user update
export const SingleUserUpdate = async (req, res, next) => {
    const id = req.params.id;
    try {

        const olduser = await Auth_Shema.findById({ _id: id })
        if (req.body.password) {
            const oldPassword = await bcrypt.compare(req.body.oldpassword, olduser?.password);
            if (oldPassword) {
                const salt = await bcrypt.genSalt(10);
                const comparepassword = await bcrypt.hashSync(req.body.password, salt)
                const response = await Auth_Shema.findByIdAndUpdate({ _id: id }, { password: comparepassword }, { new: true });
                if (response) { res.status(200).json({ message: "Updated Password successfully" }); }

            }
            else {
                res.status(404).json({ message: "Old Password Dosn't Matched" });
            }

        }
        else {
            const response = await Auth_Shema.findByIdAndUpdate({ _id: id }, req.body, { new: true });
            if (response) { res.status(200).json({ message: "Updated successfully" }); }
            else {
                res.status(404).json({ message: "User Id Not Found", });
            }
        }

    } catch (error) {
        res.status(404).json({ message: "User Id Not Found", });
    }
}
// all users
export const AllUsers = async (req, res, next) => {
    try {
        const response = await Auth_Shema.find();
        if (response) {
            res.status(200).json({ message: "All Users", data: response });
        }
    } catch (error) {
        res.status(404).json({ message: error });

    }
}