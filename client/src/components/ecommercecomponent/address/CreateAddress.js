import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AddressCreateActions } from './../../../redux/actions/CreateAddressActions';
import { useDispatch } from 'react-redux';
function CreateAddress() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: "",
        contactno: "",
        alternateno: "",
        street: "",
        city: "",
        pincode: "",
        address: "",
        locationtype: ""
    });

    const {
        username,
        contactno,
        alternateno,
        street,
        city,
        pincode,
        address,
        locationtype } = user;
    const [error, setError] = useState(false);

    const navigtate = useNavigate();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const SubmitData = (e) => {
        e.preventDefault();
        if (username?.length === 0 || contactno?.length === 0 || alternateno?.length === 0 || street?.length === 0 || city?.length === 0 || pincode?.length === 0 || address?.length === 0 ||
            locationtype?.length === 0) {
            setError(true);
        }

        if (username &&
            contactno &&
            alternateno &&
            street &&
            city &&
            pincode &&
            address &&
            locationtype) {
            const datas = {
                username,
                contactno,
                alternateno,
                street,
                city,
                pincode,
                address,
                locationtype
            }
            dispatch(AddressCreateActions(datas, navigtate))
        }
    }
    return (
        <div>
            <div className='sigin-main-section'>
                <div className='inside-main-section'>

                    <div className='form-section'>
                        <div className='fw-bold fs-3 mb-5 mt-5'>
                            Address
                        </div>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>User Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter userName" className='form-box' name="username" value={username} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && username?.length <= 0 ? <span className='text-danger'>Field is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>Contact no</Form.Label>
                                        <Form.Control type="text" placeholder="Enter contactno" className='form-box' name="contactno" value={contactno} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && contactno?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>



                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>Alternate no</Form.Label>
                                        <Form.Control type="text" placeholder="Enter alternateno" className='form-box' name="alternateno" value={alternateno} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && alternateno?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>Street </Form.Label>
                                        <Form.Control type="text" placeholder="Enter street" className='form-box' name="street" value={street} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && street?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>



                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>city no</Form.Label>
                                        <Form.Control type="text" placeholder="Enter city" className='form-box' name="city" value={city} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && city?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>pincode</Form.Label>
                                        <Form.Control type="text" placeholder="Enter pincode" className='form-box' name="pincode" value={pincode} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && pincode?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group></Col>
                            </Row>



                            <Form.Group className="mb-3" controlId="formBasictext">
                                <Form.Label className='mb-2'>address</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Address...."
                                    style={{ height: '100px' }}
                                    name="address" value={address} onChange={handleChange}
                                />
                                <Form.Text className="text-muted">
                                    {error && address?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasictext">
                                <Form.Label className='mb-2'>Location</Form.Label>

                                <Form.Select aria-label="Default select example" name="locationtype" value={locationtype} onChange={handleChange}>
                                    <option value="" disabled selected>--Please Select Location--</option>
                                    <option value="Home">Home</option>
                                    <option value="Work from Office">Work from Office</option>
                                </Form.Select>
                                <Form.Text className="text-muted">
                                    {error && locationtype?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                </Form.Text>
                            </Form.Group>

                            <button className='submit-button mb-5' onClick={SubmitData}>
                                Create Address
                            </button>
                        </Form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAddress