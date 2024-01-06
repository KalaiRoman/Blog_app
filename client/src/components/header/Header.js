import React, { useEffect } from 'react'
import './styles/Header.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SingleuserActionData } from '../../redux/actions/SingleuserAction';
import { GetcartActions } from '../../redux/actions/CartActions';

function Header() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state?.singleuser?.Singleuser);
    const statecart = useSelector((state) => state?.cart?.CartData);
    const usercart = useSelector((state) => state?.usercart?.UsercartData);

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
        dispatch(GetcartActions())

    }, [])

    const CartPath = () => {
        navigate("/ecommerce/cart")
    }

    const path = window.location.pathname;
    return (
        <div>
            <div class="navbar">
                <div class="container-fluid d-flex justify-content-between align-items-center">
                    <div onClick={homePath} className='cursor ' >
                        Blog's
                    </div>
                    <div className='d-flex gap-5 justify-content-between  align-items-center ' style={{ width: "46%" }}>
                        {token ? <>
                            <div onClick={profielPath} className='cursor'
                                style={{
                                    color: path == "/profile" ? "red" : "black"
                                }}
                            >
                                {state?.userName}
                            </div></> : <div className='cursor' onClick={loginpath}>Login</div>}
                        <div className='cursor' onClick={() => window.location.assign("/ecommerce")}
                            style={{
                                color: path == "/ecommerce" ? "red" : "black"
                            }}
                        >
                            Shopping
                        </div>
                        {token && <>
                            <div className='cursor' onClick={CreateBlogpath}
                                style={{
                                    color: path == "/currentuserblogs" ? "red" : "black",
                                    width: "100%",
                                    textAlign: "center"
                                }}
                            >
                                Create Posts
                            </div>
                        </>}
                        <div className="cart-image" onClick={CartPath}>
                            <ion-icon name="cart-outline"></ion-icon>
                            <span className='count-cart'>{usercart?.length}</span>
                        </div>
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
            </div>
        </div>
    )
}

export default Header