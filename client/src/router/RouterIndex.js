import { Route, Routes } from "react-router-dom";
import React from 'react'
import Signin from "../components/auth/Signin";
import Dashboard from "../components/dashboard/Dashboard";
import Signup from "../components/auth/Signup";
import Author from "../components/author/Author";
import CreateBlog from "../components/createblog/CreateBlog";
import AllBlogs from "../components/createblog/AllBlogs";
import Profile from "../components/profile/Profile";
function RouterIndex() {
    return (
        <section>
            <Routes>
                <Route path="/login" element={<Signin />}></Route>
                <Route path="/register" element={<Signup />}></Route>
                <Route path="/author" element={<Author />}></Route>
                <Route path="/allblogs" element={<AllBlogs />}></Route>
                <Route path="/createBlog" element={<CreateBlog />}></Route>
                <Route path="/profile" element={<Profile />}></Route>

                <Route path="/" exact element={<Dashboard />}></Route>

            </Routes>
        </section>
    )
}

export default RouterIndex