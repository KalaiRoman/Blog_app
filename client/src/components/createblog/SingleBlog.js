import React, { useEffect } from 'react'
import { Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { singleblogAction } from '../../redux/actions/CreateBlogActions';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
function SingleBlog() {



    const navigate = useNavigate();
    const token = localStorage.getItem("blog_token");

    const checktoken = jwt_decode(token);
    const { state } = useLocation();
    const dispatch = useDispatch();
    const states = useSelector((state) => state?.currentblog?.singleblog);
    useEffect(() => {
        dispatch(singleblogAction(state?.id))
    }, [state])

    const editblog = (id) => {
        navigate("/createblog", {
            state: { id: id }
        })
    }
    const deleteblog = (id) => {
        navigate("/createblog", {
            state: { id: id }
        })
    }
    return (
        <div className='container'>
            <Card className='col-lg-12 w-100 h-100 position-relative'>
                <Card.Body>
                    <div className='col-lg-12'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <div className='col-lg-10'>
                                    <button className="delete-btn mb-4" onClick={() => navigate(-1)}>Back</button>
                                </div>

                                <div className='d-flex gap-3'>

                                    <div>
                                        {states?.user?.avatar ? <>

                                            <img className="dashobard-images" src={states?.user?.avatar} alt="no image" />

                                        </> : <>

                                            <img className="dashobard-images" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />

                                        </>}

                                    </div>
                                    <div className='d-flex flex-column'>
                                        <div>
                                            {states?.user?.userName}
                                        </div>
                                        <div>
                                            {moment(states?.createdAt).format('LL')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {checktoken?.id === states?.user?._id ? <>
                                    <div className='button d-flex gap-5 align-items-center'>
                                        <div>
                                            <button className='edit-btn' onClick={()=>editblog(states?._id)}>Edit</button>
                                        </div>
                                        <div>
                                            <button className='delete-btn'>Delete</button>
                                        </div>
                                    </div>
                                </> : null}
                            </div>
                        </div>
                        <div className='mt-5'>
                            {ReactHtmlParser(states?.description)}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SingleBlog