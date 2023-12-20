import { combineReducers } from "redux";
import Tokenreducer from './Token_reducer.js';
import Alluserreducer from './Alluser_reducer.js';
import SingleUserreducer from './Singleuser_reducer.js';
import Blogreducer from './Blog_reducer.js';

import CurrentuserBlogReducer from './CurrentUserBlog_reducer.js';

const RootReducer = combineReducers({
    login: "loginReducer",
    token: Tokenreducer,
    alluser: Alluserreducer,
    singleuser: SingleUserreducer,
    blog: Blogreducer,
    currentblog:CurrentuserBlogReducer
});

export default RootReducer;