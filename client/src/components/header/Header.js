import React, { useEffect } from 'react'
import './styles/Header.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SingleuserActionData } from '../../redux/actions/SingleuserAction';

function Header() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state?.singleuser?.Singleuser);
    const navigate = useNavigate();
    const homePath = () => {
        navigate("/");
    }
    const loginpath = () => {
        navigate("/login");
    }
    const authLogin = () => {
        navigate("/author");
    }
    const CreateBlogpath = () => {
        navigate("/currentuserblogs");

    }
    const profielPath = () => {
        navigate("/profile");
    }
    const token = localStorage.getItem("blog_token");
    // const decoded = jwtDecode(token);
    const Logout = async () => {
        localStorage.clear();
        localStorage.removeItem("blog_token");
        window.location.assign("/");
    }

    useEffect(() => {
        dispatch(SingleuserActionData());
    }, [])

    const path = window.location.pathname;
    return (
        <div>
            <nav class="navbar navbar-light bg-light navbar-expand-lg">
                <div class="container-fluid">
                    <div onClick={homePath} className='cursor'>
                        Blog's
                    </div>
                    <div className='d-flex gap-5'>
                        {token ? <>
                            <div onClick={profielPath} className='cursor'
                                style={{
                                    color: path == "/profile" ? "red" : "black"
                                }}
                            >
                                {state?.userName}
                            </div></> : <div className='cursor' onClick={loginpath}>Login</div>}
                        {token ? <>
                            <div className='cursor' onClick={CreateBlogpath}
                                style={{
                                    color: path == "/currentuserblogs" ? "red" : "black"
                                }}
                            >
                                Create Post
                            </div>
                        </> : <>
                            {/* <div className='cursor' onClick={loginpath}
                                style={{
                                    color: path == "/currentuserblogs" ? "red" : "black"
                                }}
                            >
                                Create Post
                            </div> */}
                        </>}
                        <div className='cursor' onClick={authLogin}
                            style={{
                                color: path == "/author" ? "red" : "black"
                            }}
                        >
                            Author
                        </div>

                        {token && <div onClick={Logout} className='cursor'>Logout</div>}
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header