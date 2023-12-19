import React, { useEffect } from 'react'
import './styles/Header.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SingleuserActionData } from '../../redux/actions/SingleuserAction';

function Header() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state?.singleuser?.Singleuser);

    console.log(state, 'state')
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
        navigate("/allblogs");
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
    return (
        <div>
            <nav class="navbar navbar-light bg-light navbar-expand-lg">
                <div class="container-fluid">
                    <div onClick={homePath} className='cursor'>
                        Blog's
                    </div>
                    <div className='d-flex gap-4'>
                        {token ? <>
                            <div>
                                {state?.userName}
                            </div></> : <div className='cursor' onClick={loginpath}>Login</div>}
                        <div className='cursor' onClick={authLogin}>
                            Author
                        </div>
                        {token ? <>
                            <div className='cursor' onClick={CreateBlogpath}>
                                Create Blog
                            </div>
                        </> : <>
                            <div className='cursor' onClick={loginpath}>
                                Create Blog
                            </div></>}
                        {token && <div onClick={Logout} className='cursor'>Logout</div>}
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header