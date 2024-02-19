import expres from 'express';
import { AllUsers, AuthLogin, AuthRegister, BulkMailUpload, GetSingleUserData, OtpgenrateUser, SingleUserUpdate, forgetpassword, otpVerification, passwordChange } from './AuthControlls.js';
const authrouter = expres.Router();
authrouter.post("/register", AuthRegister)
authrouter.post("/login", AuthLogin)
authrouter.get("/get/:id", GetSingleUserData)
authrouter.put("/update/:id", SingleUserUpdate)
authrouter.get("/alluser", AllUsers)
authrouter.post("/forgetpassword", forgetpassword)
authrouter.put("/passwordchange/:id", passwordChange)
authrouter.post("/otp", OtpgenrateUser)
authrouter.post("/otp/verification", otpVerification)
authrouter.post("/upload/mail/alluser", BulkMailUpload)


export default authrouter;