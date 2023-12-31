import expres from 'express';
import { AllUsers, AuthLogin, AuthRegister, GetSingleUserData, SingleUserUpdate, forgetpassword, passwordChange } from './AuthControlls.js';
const authrouter = expres.Router();
authrouter.post("/register", AuthRegister)
authrouter.post("/login", AuthLogin)
authrouter.get("/get/:id", GetSingleUserData)
authrouter.put("/update/:id", SingleUserUpdate)
authrouter.get("/alluser", AllUsers)
authrouter.post("/forgetpassword", forgetpassword)
authrouter.put("/passwordchange/:id", passwordChange)


export default authrouter;