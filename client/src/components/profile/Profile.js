import React, { useEffect, useState } from 'react'
import './styles/Profile.scss';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { SingleuserActionData, UpdateProfileActionData } from '../../redux/actions/SingleuserAction';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Profile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    const [imageurl, setImageUrl] = useState("");
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        profileDescription: ""
    });
    const { email, password, username, profileDescription } = user;
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const state = useSelector((state) => state?.singleuser?.Singleuser);

    useEffect(() => {
        dispatch(SingleuserActionData());
    }, [])


    useEffect(() => {

        if (state?.userName) {
            setUser({
                username: state?.userName ? state?.userName : null,
                email: state?.email ? state?.email : null,
                password: state?.password ? state?.password : null,
                profileDescription: state?.profileDescription ? state?.profileDescription : null
            })
            setImageUrl(state?.avatar);
        }
        else {
            setUser({})
        }

    }, [state])


    const UpdateProfileData = (e) => {
        e.preventDefault();
        const datas = {
            userName: username,
            email: email,
            profileDescription: profileDescription
        }
        dispatch(UpdateProfileActionData(datas));

    }

    const imageurlclear = () => {
        setImageUrl("");
    }

    const imageUpdate = () => {
        const data = {
            avatar: imageurl
        }
        dispatch(UpdateProfileActionData(data, handleClose));
    }
    return (
        <div>
            <div className='container'>
                <div className='mb-3'>

                    <div className='mx-auto d-flex align-items-center justify-content-center profileimage'>

                        {imageurl ? <>
                            <img className="profile-image" src={imageurl} alt="no image" />
                            <div className='editicon' onClick={handleShow}>
                                <ion-icon name="create-outline" size="large"></ion-icon>
                            </div>

                        </> : <>
                            <img className="profile-image" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />
                            <div className='editicon' onClick={handleShow}>
                                <ion-icon name="create-outline" size="large"></ion-icon>
                            </div>
                        </>}

                    </div>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter userName" name="username" value={username} onChange={handleChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>


                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} disabled />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </div>

                <div className='d-flex align-items-center justify-content-center'>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Profile Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" name="profileDescription" value={profileDescription} onChange={handleChange} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>


                </div>

                <div className='d-flex align-items-center justify-content-center mt-4'>
                    <button className='update-btn' onClick={UpdateProfileData}>
                        Update Profile
                    </button>
                </div>
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >

                <Modal.Body>
                    <div className='d-flex align-items-center justify-content-center mb-5 mt-3'>
                        {imageurl ? <>
                            <img className="profile-image" src={imageurl} alt="no image" />


                        </> : <>
                            <img className="profile-image" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />

                        </>}
                    </div>
                    <div className='d-flex align-items-center justify-content-center col-lg-12'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Profile Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter profile Image url"
                                onChange={(e) => setImageUrl(e?.target?.value)}
                                value={imageurl}
                            />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>


                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={imageurlclear}>
                        Clear
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={imageUpdate}>Update Image</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Profile