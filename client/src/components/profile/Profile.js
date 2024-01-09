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

    const [error, setError] = useState(false);
    const [passworderror, setPasswordError] = useState("");


    const [imageurl, setImageUrl] = useState("");
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        profileDescription: ""
    });
    // password change
    const [userpassword, setUserPassword] = useState({
        oldpassword: "",
        passwordnew: "",
        confirmpassword: "",
    });
    const { oldpassword, passwordnew, confirmpassword } = userpassword;
    const { username, password, profileDescription, email } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleChangePassword = (e) => {
        setUserPassword({ ...userpassword, [e.target.name]: e.target.value });
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


    const PasswordChange = (e) => {
        e.preventDefault();
        if (oldpassword?.length === 0 || passwordnew?.length === 0 || confirmpassword?.length === 0) {
            setError(true);
        }

        if (oldpassword && passwordnew) {
            if (passwordnew === confirmpassword) {
                const data = {
                    oldpassword: oldpassword,
                    password: passwordnew,
                }
                dispatch(UpdateProfileActionData(data))
            }
            else {
                setPasswordError("Password Not Matched")
            }
        }
    }
    return (
        <div>
            <div className='container'>
                <div className='mb-3'>

                    <div className='d-flex gap-4 mb-5 mt-2 w-50 mx-auto'>
                        <button className='edit-btn' onClick={() => window.location.assign('/currentuserblogs')}>My Posts</button>
                        <button className='edit-btn' onClick={() => window.location.assign("/ecommerce/orders")}>My Orders</button>
                        <button className='edit-btn' onClick={() => window.location.assign("/ecommerce/ourproducts")}>Your Products</button>
                        <button className='edit-btn' onClick={() => window.location.assign("/ecommerce/favorts")}>My Favorts</button>
                    </div>
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

                <div className='d-flex gap-4 align-items-center justify-content-center mt-4'>
                    <div>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>old password</Form.Label>
                            <Form.Control type="text" placeholder="Enter oldpassword" name="oldpassword" value={oldpassword} onChange={handleChangePassword} />
                            <Form.Text className="text-muted">
                                {error && oldpassword?.length <= 0 ? <span className='text-danger'>oldPassword is Required</span> : null}

                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="text" placeholder="Enter passwordnew" name="passwordnew" value={passwordnew} onChange={handleChangePassword} />
                            <Form.Text className="text-muted">
                                {error && passwordnew?.length <= 0 ? <span className='text-danger'>Password is Required</span> : null}

                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="mb-3" controlId="">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="text" placeholder="Enter confirmpassword" name="confirmpassword" value={confirmpassword} onChange={handleChangePassword} />
                            <Form.Text className="text-muted">
                                {error && confirmpassword?.length <= 0 ? <span className='text-danger'>Confirmpassword is Required</span> : null}

                            </Form.Text>
                        </Form.Group>
                    </div>
                    <div className='text-danger mb-2 mt-2'>
                        {passworderror}
                    </div>
                </div>
                <div>
                    <div className='d-flex align-items-center justify-content-center mt-4'>
                        <button className='update-btn' onClick={PasswordChange}>
                            Change Password
                        </button>
                    </div>
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