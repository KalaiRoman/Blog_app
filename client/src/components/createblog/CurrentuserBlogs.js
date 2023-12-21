import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Cards from './Cards';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogActionData, getCurrentuserallBlogActionData } from '../../redux/actions/CreateBlogActions';
import jwt_decode from 'jwt-decode';

function CurrentuserBlogs() {
    const token = localStorage.getItem("blog_token");
    const final = jwt_decode(token);
    const { state } = useLocation();

    const dispatch = useDispatch();
    const states = useSelector((state) => state?.currentblog?.CurrentUserBlogs);
    useEffect(() => {
        dispatch(getCurrentuserallBlogActionData(final?.id));
    }, [state?.id])

    const navigate = useNavigate();

    const CreateBlogNew = () => {
        navigate("/createblog")
    }

    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-end mb-5'>

                    <Button className='primary' onClick={CreateBlogNew}>Create Blog +</Button>

                </div>
                <div>
                    <div className='row gap-4'>
                        {states?.map((item, index) => {
                            return (
                                <div key={index} className='cards col-lg-3'>
                                    <Cards data={item} id={final?.id} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentuserBlogs