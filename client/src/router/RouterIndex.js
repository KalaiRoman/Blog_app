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
function RouterIndex() {
    return (
        <section>
            <Routes>
                <Route path="/login" element={<Signin />}></Route>
                <Route path="/forgetpassword" element={<Forgetpassword />}></Route>
                <Route path="/changepassword" element={<PasswordChangeforget />}></Route>



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


                </Route>

            </Routes>
        </section>
    )
}

export default RouterIndex