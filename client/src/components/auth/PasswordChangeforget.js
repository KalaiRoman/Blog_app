import React, { useState } from 'react'
import './styles/Login.scss';
import { Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ChangepasswordActions } from '../../redux/actions/LoginActions';

function PasswordChangeforget() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { state } = useLocation();


    const [user, setUser] = useState({
        password: "",
        confirmpassword: ""
    });
    const [error, setError] = useState(false);
    const [passworderror, setPasswordError] = useState("");
    const { password, confirmpassword } = user;
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const SubmitData = (e) => {
        e.preventDefault();
        if (password?.length === 0 || confirmpassword?.length === 0) {
            setError(true);
        }
        else {
            if (password === confirmpassword) {
                const datas = {
                    password: password,
                }
                dispatch(ChangepasswordActions(state?.user, datas, navigate))
            }
            else {
                setPasswordError("Confirm password Not Matched");
            }
        }
    }

    return (
        <div className='sigin-main-section'>
            <div className='inside-main-section'>

                <div className='form-section'>
                    <div className='fw-bold fs-3 mb-5'>
                        Password Change
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Label className='mb-2'>New Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" className='form-box' name="password" value={password} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                {error && password?.length <= 0 ? <span className='text-danger'>password is Required</span> : null}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasictext">
                            <Form.Label className='mb-2'>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter confirm password" className='form-box' name="confirmpassword" value={confirmpassword} onChange={handleChange} />
                            <Form.Text className="text-muted">
                                {error && confirmpassword?.length <= 0 ? <span className='text-danger'>confirmpassword is Required</span> : null}
                                {passworderror}
                            </Form.Text>
                        </Form.Group>

                        <button className='edit-btn p-2' onClick={SubmitData}>
                            Password Change
                        </button>
                    </Form>


                </div>
            </div>
        </div>
    )
}

export default PasswordChangeforget