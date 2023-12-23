import React, { useCallback, useState, useMemo, useEffect } from 'react'

import Form from 'react-bootstrap/Form';

import { Col } from 'react-bootstrap';
import JoditEditor from 'jodit-react';
import './styles/Createblog.scss';
import { CreateblogActionData, EditblogAction, singleblogAction } from '../../redux/actions/CreateBlogActions';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function CreateBlog() {


    const { state } = useLocation();

    const [loading, setLoading] = useState(false);


    const states = useSelector((state) => state?.currentblog?.singleblog);

    const navigate = useNavigate();

    const token = localStorage.getItem("blog_token");
    const final = jwt_decode(token);
    const dispatch = useDispatch();
    const [error, setError] = useState(false);

    const [content, setContent] = useState("");
    const [logs, setLogs] = useState([]);
    const appendLog = useCallback(
        (message) => {
            const newLogs = [...logs, message];
            setLogs(newLogs);
        },
        [logs, setLogs]
    );

    const config = useMemo(
        () => ({
            readonly: false,
            placeholder: "Enter Post Content"

        }),
        []
    );

    const onChange = useCallback(
        (newContent) => {
            appendLog(`onChange triggered with ${newContent}`);
        },
        [appendLog]
    );

    useEffect(() => {
    }, [onChange]);

    const onBlur = useCallback(
        (newContent) => {
            appendLog(`onBlur triggered with ${newContent}`);
            setContent(newContent);
        },
        [appendLog, setContent]
    );

    const [createblog, setCreateBlog] = useState({
        title: "",
        description: "",
        type: "",
        avatar: ""
    });
    const { title, description, type, avatar } = createblog;
    const handleChange = (e) => {
        setCreateBlog({ ...createblog, [e.target.name]: e.target.value });
    };



    const UploadCreateBlog = (e) => {
        e.preventDefault();
        if (title?.length === 0 || type?.length === 0 || content?.length === 0 || avatar?.length === 0) {
            setError(true);
        }

        if (title && type && content && avatar) {

            const data = {
                title: title,
                category: type,
                description: content,
                avatar: avatar,
                userId: final?.id
            }
            dispatch(CreateblogActionData(data, navigate, setLoading))
        }
    }



    useEffect(() => {
        dispatch(singleblogAction(state?.id))
    }, [state?.id])


    useEffect(() => {
        if (states) {
            setCreateBlog({
                title: states?.title,
                type: states?.category,
                avatar: states?.avatar

            })

            setContent(states?.description)
        }
    }, [])


    const UpadtePost = (e) => {
        e.preventDefault();
        if (title?.length === 0 || type?.length === 0 || content?.length === 0 || avatar?.length === 0) {
            setError(true);
        }

        if (title && type && content && avatar) {

            const data = {
                title: title,
                category: type,
                description: content,
                avatar: avatar,
            }
            dispatch(EditblogAction(state?.id, data, navigate, setLoading));
        }
    }

    const optionData = ['Cricket', "IT Solutions", "Reactjs Developer", "Nodejs Developer", "Python Developer", "Cow", "Tree", "KTM Bike", "NS200", "News", "Art", "Laptops", "Mac", "IPhone"]
    return (
        <div>
            <div className='container'>
                <div className='mx-auto d-flex align-items-center justify-content-center flex-column'>
                    <div className='d-flex align-items-center justify-content-center col-lg-12'>
                        <Col lg="6">

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" name="title" value={title} onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    {error && title?.length <= 0 ? <span className='text-danger'>Title is Required</span> : null}

                                </Form.Text>
                            </Form.Group>
                        </Col>


                    </div>

                    <div className='d-flex align-items-center justify-content-center col-lg-12'>
                        <Col lg="6">
                            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Type</Form.Label>
                                <Form.Control type="text" placeholder="Enter description" name="type" value={type} onChange={handleChange} />
                                <Form.Text className="text-muted">
                                    {error && type?.length <= 0 ? <span className='text-danger'>Type is Required</span> : null}

                                </Form.Text>
                            </Form.Group> */}

                            <Form.Label>Category</Form.Label>
                            <Form.Select aria-label="Default select example" name="type" value={type} onChange={handleChange}>
                                <option selected value="" disabled>--Select Categorys--</option>
                                {optionData?.map((item) => {
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })}

                            </Form.Select>

                            <Form.Text className="text-muted">
                                {error && type?.length <= 0 ? <span className='text-danger'>Category is Required</span> : null}
                            </Form.Text>
                        </Col>


                    </div>
                    <div className='d-flex flex-start mt-3 mb-3'>
                        Description
                    </div>

                    <div className='d-flex align-items-center justify-content-center flex-column col-lg-12 mb-3'>

                        <Col lg="6">
                            <JoditEditor
                                value={content}
                                config={config}
                                tabIndex={1}
                                onBlur={onBlur}
                                onChange={onChange}
                            />
                        </Col>
                        <Form.Text className="text-muted">
                            {error && content?.length <= 0 ? <span className='text-danger'>Description is Required</span> : null}

                        </Form.Text>

                    </div>


                    <div>
                        {avatar ? <>
                            <img src={avatar} alt="no image" />
                        </> : <>
                            <img src={avatar} alt="no image" />
                        </>}
                    </div>


                    <div className='d-flex align-items-center justify-content-center col-lg-12'>
                        <Col lg="6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter profile Image url"
                                    name="avatar"
                                    onChange={handleChange}
                                    value={avatar}
                                />
                                <Form.Text className="text-muted">
                                    {error && avatar?.length <= 0 ? <span className='text-danger'>Avatar is Required</span> : null}

                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </div>
                    <div className='col-lg-12'>
                        <button className='create-blog' onClick={state?.id ? UpadtePost : UploadCreateBlog}>

                            {loading ? <>
                                Loading...
                            </> : <>

                                {state?.id ? "Update Post" : "Create Post"}

                            </>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog