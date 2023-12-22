import React, { useState } from 'react'
import './styles/Login.scss';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { LoginAction } from '../../redux/actions/LoginActions';

function Forgetpassword() {

    const dispatch = useDispatch();

    const navigate = useNavigate();


    const [user, setUser] = useState({
        email: "",
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
                        Forget Password
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Label className='mb-2'>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter email or userName" className='form-box' name="email" value={email} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                {error && email?.length <= 0 ? <span className='text-danger'>EmailoruserName is Required</span> : null}
                            </Form.Text>
                        </Form.Group>

                        <button className='submit-button' onClick={SubmitData}>
                            Forget password
                        </button>
                    </Form>

                    <div className='mb-5'>

                        <div className='text-center cursor mt-4 fs-5 fw-bold' onClick={SignupPath}>
                            <button className='edit-btn'>
                                Back to Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgetpassword