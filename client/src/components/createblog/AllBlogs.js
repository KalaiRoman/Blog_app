import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Cards from './Cards';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogActionData, getCurrentuserallBlogActionData } from '../../redux/actions/CreateBlogActions';
import jwt_decode from 'jwt-decode';

function AllBlogs() {
    const token = localStorage.getItem("blog_token") ? localStorage.getItem("blog_token") : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const final = jwt_decode(token);
    const { state } = useLocation();

    const dispatch = useDispatch();
    const states = useSelector((state) => state?.currentblog?.CurrentUserBlogs);
    useEffect(() => {
        dispatch(getCurrentuserallBlogActionData(state?.id));
    }, [state?.id])

    const navigate = useNavigate();

    const CreateBlogNew = () => {
        navigate("/createblog")
    }

    return (
        <div>
            <div className='container'>

                <div>
                    <div className='row gap-4'>

                      

                            {states?.map((item, index) => {
                                return (
                                    <div key={index} className='cards col-lg-3'>
                                        <Cards data={item} id={null}/>
                                    </div>
                                )
                            })}
                      

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBlogs