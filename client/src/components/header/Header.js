import React from 'react'
import './styles/Header.scss';
import { useNavigate } from "react-router-dom";
function Header() {



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


    return (
        <div>
            <nav class="navbar navbar-light bg-light navbar-expand-lg">
                <div class="container-fluid">
                    <div onClick={homePath} className='cursor'>
                        Blog's
                    </div>
                    <div className='d-flex gap-4'>
                        <div className='cursor' onClick={loginpath}>
                            Login
                        </div>
                        <div className='cursor' onClick={authLogin}>
                            Author
                        </div>
                        <div className='cursor' onClick={CreateBlogpath}>
                            Create Blog
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header