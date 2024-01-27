import { Route, Routes } from "react-router-dom";
import React from 'react'
import Signin from "../components/auth/Signin";
import Dashboard from "../components/dashboard/Dashboard";
import Signup from "../components/auth/Signup";
import Author from "../components/author/Author";
import CreateBlog from "../components/createblog/CreateBlog";
import AllBlogs from "../components/createblog/AllBlogs";
import Profile from "../components/profile/Profile";
import CurrentuserBlogs from "../components/createblog/CurrentuserBlogs";
import Forgetpassword from "../components/auth/Forgetpassword";
import SingleBlog from "../components/createblog/SingleBlog";
import PasswordChangeforget from "../components/auth/PasswordChangeforget";
import Home from "../components/ecommercecomponent/Home/Home";
import Products from "../components/ecommercecomponent/products/Products";
import Cart from "../components/ecommercecomponent/cart/Cart";
import CreateAddress from "../components/ecommercecomponent/address/CreateAddress";
import Addproduct from "../components/ecommercecomponent/products/Addproduct";
import ProductView from "../components/ecommercecomponent/products/ProductView";
import Orders from "../components/ecommercecomponent/orders/Orders";
import LeraningPart from "../components/learningpart/LeraningPart";
import Ourproducts from "../components/ecommercecomponent/products/Ourproducts";
import HomeaAdmin from "../components/adminportal/HomeaAdmin";
import FavortProducts from "../components/ecommercecomponent/products/FavortProducts";
import Sortmethod from "../components/Learningcomponents/Sortmethod";
import Mainlearning from "../components/Learningcomponents/Mainlearning";
import Includesmethod from "../components/Learningcomponents/Includesmethod";
import Maxnumbercheck from "../components/Learningcomponents/Maxnumbercheck";
import Callbackfunction from "../components/Learningcomponents/Callbackfunction";
import StringtoArrayconvert from "../components/Learningcomponents/StringtoArrayconvert";
import Restoperator from "../components/Learningcomponents/Restoperator";
import CountProgram from './../components/Learningcomponents/CountProgram';
import Objetmap from "../components/Learningcomponents/Objetmap";
import DuplicateValue from "../components/Learningcomponents/DuplicateValue";
import SwicthMethod from "../components/Learningcomponents/SwicthMethod";
import GetComponentValues from "../components/Learningcomponents/GetComponentValues";
import Readmorebutton from './../components/Learningcomponents/Readmorebutton';
import Tab from "../components/Learningcomponents/Tab";
function RouterIndex() {
    return (
        <section>
            <Routes>
                <Route path="/login" element={<Signin />}></Route>
                <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
                <Route path="/changepassword" element={<PasswordChangeforget />}></Route>
                <Route path="/leraning" element={<LeraningPart />}></Route>




                <Route path="/register" element={<Signup />}></Route>
                <Route path="/author" element={<Author />}></Route>
                <Route path="/allblogs" element={<AllBlogs />}></Route>
                <Route path="/currentuserblogs" element={<CurrentuserBlogs />}></Route>

                <Route path="/createBlog" element={<CreateBlog />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/singleblog" element={<SingleBlog />}></Route>

                <Route path="/" exact element={<Dashboard />}></Route>


                {/* ecommerce */}
                <Route path="/ecommerce" element={<Home />}>
                    <Route path="/ecommerce" element={<Products />}></Route>
                    <Route path="cart" element={<Cart />}></Route>
                    <Route path="address" element={<CreateAddress />}></Route>
                    <Route path="addproduct" element={<Addproduct />}></Route>
                    <Route path="productview" element={<ProductView />}></Route>
                    <Route path="orders" element={<Orders />}></Route>
                    <Route path="ourproducts" element={<Ourproducts />}></Route>
                    <Route path="favorts" element={<FavortProducts />}></Route>

                </Route>

                <Route path="/admin" element={<HomeaAdmin />}>
                    <Route path="admin" element={<HomeaAdmin />}></Route>
                </Route>


                <Route path="/learning" element={<Mainlearning />}>
                    <Route path="/learning" element={<Sortmethod />}></Route>
                    <Route path="includes" element={<Includesmethod />}></Route>
                    <Route path="max" element={<Maxnumbercheck />}></Route>
                    <Route path="call" element={<Callbackfunction />}></Route>
                    <Route path="convertarray" element={<StringtoArrayconvert />}></Route>
                    <Route path="restoperator" element={<Restoperator />}></Route>
                    <Route path="count" element={<CountProgram />}></Route>
                    <Route path="object" element={<Objetmap />}></Route>
                    <Route path="order" element={<DuplicateValue />}></Route>
                    <Route path="swicth" element={<SwicthMethod />}></Route>
                    <Route path="reuseable" element={<GetComponentValues />}></Route>
                    <Route path="readmore" element={<Readmorebutton />}></Route>
                    <Route path="tab" element={<Tab />}></Route>










                </Route>
            </Routes>
        </section>
    )
}

export default RouterIndex