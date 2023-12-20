import React, { useEffect, useState } from 'react'
import './styles/Profile.scss';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { SingleuserActionData, UpdateProfileActionData } from '../../redux/actions/SingleuserAction';
function Profile() {
    const dispatch = useDispatch();

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

    console.log(state, 'state')
    useEffect(() => {
        dispatch(SingleuserActionData());
    }, [])


    useEffect(() => {

        if (state) {
            setUser({
                username: state?.userName,
                email: state?.email,
                password: state?.password,
                profileDescription: state?.profileDescription
            })
        }
        else {
            setUser({})
        }

    }, [])


    const UpdateProfileData = (e) => {
        e.preventDefault();
        const datas = {
            userName: username,
            email: email,
            profileDescription: profileDescription
        }

        dispatch(UpdateProfileActionData(datas));

    }
    return (
        <div>
            <div className='container'>
                <div className='mb-3'>

                    <div className='col-lg-6 mx-auto d-flex align-items-center justify-content-center'>
                        <img className="profile-image" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />
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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Profile Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter description" />
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


        </div>
    )
}

export default Profile