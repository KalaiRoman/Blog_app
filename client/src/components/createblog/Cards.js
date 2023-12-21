import React, { useState } from 'react'
import ReactHtmlParser from 'react-html-parser';
import './styles/Createblog.scss';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/en.json';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { DeletesingleblogAction } from '../../redux/actions/CreateBlogActions';

TimeAgo.addDefaultLocale(en);
function Cards({ data, id }) {


    const des = data?.description?.slice(0, 220);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const dispatch = useDispatch();


    const [deleteid, setDeleteid] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editBlog = (ids) => {
        navigate("/createblog", { state: { id: ids } })
    }

    const Deleteblog = (ids) => {
        handleShow();
        setDeleteid(ids);
    }

    const DeletePost = () => {
        dispatch(DeletesingleblogAction(deleteid, setLoading, handleClose, id))
    }
    return (
        <div>
            <div>
                {data?.avatar ? <>
                    <img className="dashobard-image" src={data?.avatar} alt="no image" />
                </> : <>
                    <img className="dashobard-image" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />
                </>}
            </div>
            <div className='mt-3 fw-bold'>
                {data?.title}
            </div>
            <div className='fs-6 mt-2' style={{ height: "80px" }}>
                {ReactHtmlParser(des)}
            </div>

            {id ? <>


                <div className='ms-3 mb-4 d-flex align-items-center justify-content-between'>

                    <div>
                        <strong>
                            <ReactTimeAgo date={new Date(data?.createdAt)} locale='en-US' />
                        </strong>
                    </div>
                    <div>
                        <button className='type-btn'>
                            {data?.category}
                        </button>
                    </div>
                </div>
                <div className='d-flex justify-content-around mt-3 mb-2'>
                    <div>
                        {/* <ion-icon name="create-outline"></ion-icon> */}

                        <button className='edit-btn' onClick={() => editBlog(data?._id)}>Edit</button>
                    </div>

                    <div>
                        {/* <ion-icon name="trash-outline"></ion-icon> */}
                        <button className='delete-btn' onClick={() => Deleteblog(data?._id)}>Delete</button>
                    </div>
                </div>
            </> : <>

                <div>
                    <div className='d-flex gap-3'>
                        <div>
                            {data?.user?.avatar ? <>

                                <img className="dashobard-images" src={data?.user?.avatar} alt="no image" />

                            </> : <>

                                <img className="dashobard-images" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />

                            </>}
                        </div>
                        <div className='d-flex gap-5'>
                            <div>
                                <div>
                                    {data?.user?.userName}
                                </div>
                                <div>
                                    <small>
                                        <ReactTimeAgo date={new Date(data?.createdAt)} locale='en-US' />
                                    </small>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <button className='type-btn'>
                                        {data?.category}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>}




            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Post!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center fs-5 fw-bold'>
                        Are You Sure Delete Post
                    </div>
                    <div className='d-flex align-items-center gap-5 justify-content-center mt-4 mb-3'>

                        <button className='yes-btn' onClick={DeletePost}>
                            {loading ? <>loading...</> : "Yes"}
                        </button>
                        <button className='no-btn' onClick={handleClose}>No</button>

                    </div>
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default Cards