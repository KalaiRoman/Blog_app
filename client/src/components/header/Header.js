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

                {state?.usertype == 1 ? <>
                    {token ? <>
                        <div onClick={profielPath} className='cursor d-flex align-items-center'

                        >
                            {state?.avatar ? <>
                                <img src={state?.avatar} alt="no image" style={{ width: "30%", height: "30%", borderRadius: "50%", cursor: "pointer" }} />
                            </> : <>
                                <img src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image"
                                    style={{ width: "5%", height: "5%", borderRadius: "50%", cursor: "pointer" }} />

                            </>}

                        </div></> : <div className='cursor' onClick={loginpath}>Login</div>}

                    {token && <div onClick={Logout} className='cursor'>Logout</div>}
                </> : <>


                    <div class="container-fluid d-flex justify-content-between align-items-center">
                        <div onClick={homePath} className='cursor' >
                            Blog's
                        </div>
                        <div className='d-flex gap-5 justify-content-between  align-items-center ' style={{ width: "46%" }}>

                            <div className='cursor' onClick={() => window.location.assign("/ecommerce")}
                                style={{
                                    color: path == "/ecommerce" ? "red" : "black"
                                }}
                            >
                                Shopping
                            </div>

                            <div className='cursor' onClick={() => window.location.assign("/resume")}
                                style={{
                                    color: path == "/resume" ? "red" : "black"
                                }}
                            >
                                Resume
                            </div>

                            <div className='cursor' onClick={() => window.location.assign("/qr")}
                                style={{
                                    color: path == "/qr" ? "red" : "black"
                                }}
                            >
                                QRC
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

                            {token ? <>
                                <div onClick={profielPath} className='cursor d-flex align-items-center justify-content-center'

                                >
                                    {state?.avatar ? <>
                                        <img src={state?.avatar} alt="no image" style={{ width: "30%", height: "30%", borderRadius: "50%", cursor: "pointer" }} />
                                    </> : <>
                                        <img src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image"
                                            style={{ width: "30%", height: "30%", borderRadius: "50%", cursor: "pointer" }} />

                                    </>}

                                </div></> : <div className='cursor' onClick={loginpath}>Login</div>}

                            {token && <div onClick={Logout} className='cursor'>Logout</div>}
                        </div>

                    </div></>}

            </div>
        </div>
    )
}

export default Header