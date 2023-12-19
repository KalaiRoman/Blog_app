import { combineReducers } from "redux";
import Tokenreducer from './Token_reducer.js';
import Alluserreducer from './Alluser_reducer.js';
import SingleUserreducer from './Singleuser_reducer.js';


const RootReducer = combineReducers({
    login: "loginReducer",
    token: Tokenreducer,
    alluser: Alluserreducer,
    singleuser: SingleUserreducer
});

export default RootReducer;