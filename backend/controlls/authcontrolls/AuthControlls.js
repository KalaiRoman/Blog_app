import Auth_Shema from "../../models/Auth_Shema.js";
import bcrypt from 'bcrypt';

// register
export const AuthRegister = async (req, res, next) => {
    const { userName, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hashSync(password, salt);
        const response = await Auth_Shema({
            userName,
            email,
            password: hashPassword
        });
        await response.save();
        res.status(201).json({ message: "User Register Successfully", user: response });
    } catch (error) {
        res.status(404).json({ message: "User Already Register", });
    }
}

// login
export const AuthLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const existemail = await Auth_Shema.findOne({ email });
        if (!existemail) res.status(404).json({ message: "User dosn't Exist", });
        const hashPassword = await bcrypt.compare(password, existemail.password);
        if (!hashPassword) {
            res.status(200).json({ message: "User Login Successfully", user: existemail });
        }
        res.status(404).json({ message: "Wrong Password" });
    } catch (error) {
        res.status(404).json({ message: "User Not Found", });
    }
}

// single user
export const SingleUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await Auth_Shema.findById({ _id: id });
        if (response) res.status(200).json({ message: "success", data: response });
        else res.status(404).json({ message: "User Id Not Found", });
    } catch (error) {
        res.status(404).json({ message: "User Id Not Found", });
    }
}

// single user update
export const SingleUserUpdate = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await Auth_Shema.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        if (response) res.status(200).json({ message: "Updated successfully" });
        else res.status(404).json({ message: "User Id Not Found", });
    } catch (error) {
        res.status(404).json({ message: "User Id Not Found", });
    }
}
// all users
export const AllUsers = async (req, res, next) => {
    try {
        const response = await Auth_Shema.find();
        if (response) res.status(201).json({ message: "All Users", data: response });
    } catch (error) {
        res.status(404).json({ message: error });

    }
}