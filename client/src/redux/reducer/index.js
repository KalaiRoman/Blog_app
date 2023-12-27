import { combineReducers } from "redux";
import Tokenreducer from './Token_reducer.js';
import Alluserreducer from './Alluser_reducer.js';
import SingleUserreducer from './Singleuser_reducer.js';
import Blogreducer from './Blog_reducer.js';
import CurrentuserBlogReducer from './CurrentUserBlog_reducer.js';
import CartReducer from './Cart_reducer.js';
import Addressreducer from './Address_reducer.js';
import ProductReducer from './Product_reducer.js';
import Favortreducer from './Allfavorts_reducer.js';
import Orderreducer from './Orders_reducer.js';
const RootReducer = combineReducers({
    login: "loginReducer",
    token: Tokenreducer,
    alluser: Alluserreducer,
    singleuser: SingleUserreducer,
    blog: Blogreducer,
    currentblog: CurrentuserBlogReducer,
    cart: CartReducer,
    address: Addressreducer,
    product: ProductReducer,
    favort: Favortreducer,
    orders: Orderreducer
});

export default RootReducer;