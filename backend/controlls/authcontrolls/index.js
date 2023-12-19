import expres from 'express';
import { AllUsers, AuthLogin, AuthRegister, SingleUser, SingleUserUpdate } from './AuthControlls.js';
const authrouter = expres.Router();
authrouter.post("/register", AuthRegister)
authrouter.post("/login", AuthLogin)
authrouter.get("/get/:id", SingleUser)
authrouter.put("/update/:id", SingleUserUpdate)
authrouter.get("/alluser", AllUsers)
export default authrouter;