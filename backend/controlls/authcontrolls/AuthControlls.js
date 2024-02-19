import Auth_Shema from "../../models/Auth_Shema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import HttpError from './../../models/errorModel.js';
import { auth_Validation_Shema } from "../../helpers/Validation_Shema.js";

import nodemailer from 'nodemailer'

import twilio from 'twilio';
import otpGenerator from 'otp-generator';
import otp_shema from "../../models/otp_shema.js";
import mail_shema from "../../models/mail_shema.js";






// const twilioaccountid = process.env.TWILIO_ACCOUNT_ID;
// const twiliotoken = process.env.TWILIO_TOKEN;




var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "kalairoman70@gmail.com",
        pass: "rkaasoiricuaignl",
    }
});







// register
export const AuthRegister = async (req, res, next) => {
    // const { userName, email, password } = req.body;
    try {
        const validatenames = { userName: req.body.userName, email: req.body.email }
        const result = await auth_Validation_Shema.validateAsync(validatenames);
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hashSync(req.body.password, salt);
        const response = await Auth_Shema({
            userName: result?.userName,
            email: result?.email,
            password: hashPassword,
            posts: 0,
            avatar: "",
            profileDescription: "",
            role: "user",
            usertype: 2,
            phoneNumber
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
            },
            {
                "phoneNumber": userNameorEmail
            }]
        });


        if (existemail) {
            const hashPassword = await bcrypt.compare(password, existemail.password);
            if (hashPassword) {
                const token = await jwt.sign({ id: existemail?._id?.toString() }, process.env.TOKENID, { expiresIn: "1d" });
                res.cookie("accessTokens", token, { httpOnly: true });

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

// forget password

export const forgetpassword = async (req, res, next) => {
    const { email } = req.body;
    try {
        const userCheck = await Auth_Shema.findOne({
            $or: [{
                "email": email
            }, {
                "userName": email
            }]
        });
        if (userCheck) {
            res.status(200).json({ message: "foregtpassword", userid: userCheck?._id });
        }
        else {
            res.status(404).json({ message: "Email is Incoorcet" });

        }
    } catch (error) {
        res.status(404).json({ message: error });

    }
}

// PASSWORD update

export const passwordChange = async (req, res, next) => {
    const id = req.params.id;
    try {
        const salt = await bcrypt.genSalt(10);
        const comparepassword = await bcrypt.hashSync(req.body.password, salt)
        const response = await Auth_Shema.findByIdAndUpdate({ _id: id }, { password: comparepassword }, { new: true });
        if (response) { res.status(200).json({ message: "Passowrd Changed successfully" }); }
    } catch (error) {
        res.status(404).json({ message: "User Id Not Found", });
    }
}




// otp genrate


export const OtpgenrateUser = async (req, res, err) => {

    const { userid, phoneNumber, email } = req.body;

    try {
        const response = await otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false });
        await otp_shema.findOneAndUpdate({
            phoneNumber: phoneNumber,
            email: email
        }, { otp: response, user: userid }, { new: true, upsert: true, setDefaultsOnInsert: true });

        if (phoneNumber) {
            // await twilio(process.env.TWILIO_ACCOUNT_ID, process.env.TWILIO_TOKEN, {
            //     lazyLoading: true
            // }).messages.create({
            //     body: `Your Otp : ${response}`,
            //     to: `+91${phoneNumber}`,
            //     from: process.env.TWILIO_PHONENUMBER
            // })
        }

        var mailOptions = {
            from: 'kalairoman70@gmail.com',
            to: email,
            subject: 'OTP YOUR MAIL!',
            html: `<div style="text-align:center,background-color:"red"><h1>Your Otp : ${response} </h1></div>`
        };
        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error, "error kalai");
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).json({ message: "Success", otp: `Your Otp : ${response}` });
    } catch (error) {
        res.status(404).json({ message: "Otp Genrate Error " });
    }
};


export const otpVerification = async (req, res, next) => {
    const { userid, otp } = req.body;
    try {
        const responseCheck = await otp_shema.find({ user: userid });
        const OtpCheck = responseCheck[0];
        if (OtpCheck?.otp == otp) {
            res.status(200).json({ message: "Otp is Correct" })
        }
        else {
            res.status(200).json({ message: "Otp is Wrong" })
        }
    } catch (error) {
        res.status(404).json({ message: "Otp Verify Error " });
    }
}


export const BulkMailUpload = async (req, res, next) => {
    const {
        mailusers,
        subjectTitle,
        description,
        mailimage,
        senderName
    } = req.body;
    try {

        // const allusermails = [];
        // const responseAllusers = await Auth_Shema.find({});
        // responseAllusers?.map((item, index) => {
        //     allusermails.push(item?.email)
        // })
        var mailOptions = {
            from: 'kalairoman70@gmail.com',
            to: mailusers,
            subject: subjectTitle,
            html: `<div><h1>Hi All,</h1>
            <img src=${mailimage} alt="no image"/>
            <div>${description}</div>
            <div style="padding-top:"20px">Best Regard,</div>
            <div>${senderName}</div>
            </div></div>`
        };
        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error, "error kalai");
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        const response = await mail_shema({
            mailusers,
            subjectTitle,
            description,
            mailimage,
            senderName
        })

        response.save();
        res.status(200).json({ message: "Mail Sended" })
    } catch (error) {
    }
}