import React, { useState } from 'react'
import './styles/Login.scss';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from '../../redux/actions/LoginActions';

function Signin() {

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(false);
    const { email, password } = user;
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const navigtate = useNavigate();
    const SubmitData = (e) => {
        e.preventDefault();
        if (email?.length === 0 || password?.length === 0) {
            setError(true);
        }

        if (email && password) {
            const datas = {
                userNameorEmail: email,
                password: password
            }
            dispatch(LoginAction(datas, navigate))
        }
    }
    const SignupPath = () => {
        navigtate("/register");
    }
    return (
        <div className='sigin-main-section'>
            <div className='inside-main-section'>

                <div className='form-section'>
                    <div className='fw-bold fs-3 mb-5'>
                        Login
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Label className='mb-2'>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email or userName" className='form-box' name="email" value={email} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                {error && email?.length <= 0 ? <span className='text-danger'>EmailoruserName is Required</span> : null}
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='mb-2'>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className='form-box' name="password" value={password} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                {error && password?.length <= 0 ? <span className='text-danger'>Password is Required</span> : null}
                            </Form.Text>
                        </Form.Group>
                        <button className='submit-button' onClick={SubmitData}>
                            Login
                        </button>
                    </Form>

                    <div className='mb-5'>
                        <div className='mt-4'>
                            Or Signup Using
                        </div>
                        <div className='text-center cursor mt-3 fs-5 fw-bold' onClick={SignupPath}>
                            Signup
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin