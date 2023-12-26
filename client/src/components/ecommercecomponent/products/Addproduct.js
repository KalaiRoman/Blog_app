import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CreateProductActions } from '../../../redux/actions/CreateProductActions';
import { ToastError } from '../../../middleware/Toast_action';

function Addproduct() {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        productname: "",
        oldprice: "",
        saleprice: "",
        discount: "",
        quantity: "",
        description: "",
        thumbimage: "",
        color: "",
        size: "",
    });

    const [multiimages, setMultimages] = useState([]);
    const [multiimg, setMultimg] = useState("");


    const handleImages = (image) => {
        if (multiimages?.includes(image)) {
            ToastError("Already Added Image")
        }
        else {
            setMultimages([...multiimages, image]);
            setMultimg("");
        }
    }
    const {
        productname,
        oldprice,
        saleprice,
        discount,
        quantity,
        description,
        thumbimage,
        color,
        size } = user;
    const [error, setError] = useState(false);

    const navigtate = useNavigate();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const SubmitData = (e) => {
        e.preventDefault();
        if (productname?.length === 0 || oldprice?.length === 0 || saleprice?.length === 0 || discount?.length === 0 || quantity?.length === 0 || description?.length === 0 || thumbimage?.length === 0
            || color?.length === 0 || size?.length == 0 || multiimg?.length === 0) {
            setError(true);
        }

        if (productname &&
            oldprice
            &&
            saleprice &&
            discount &&
            quantity &&
            description &&
            thumbimage &&
            color &&
            size && multiimages) {
            const datas = {
                productname,
                oldprice,
                saleprice,
                discount,
                quantity,
                description,
                thumbimage,
                color,
                size,
                imagestore: multiimages
            }
            dispatch(CreateProductActions(datas, navigtate))
        }
    }
    return (
        <div>
            <div className='sigin-main-section' style={{ height: "auto" }}>
                <div className='inside-main-section mt-1'>

                    <div className='form-section mt-2'>
                        <div className='fw-bold fs-3 mb-5 '>
                            Product Create
                        </div>
                        <div>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>productname</Form.Label>
                                        <Form.Control type="text" placeholder="Enter productname" className='form-box' name="productname" value={productname} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && productname?.length <= 0 ? <span className='text-danger'>Field is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>oldprice</Form.Label>
                                        <Form.Control type="text" placeholder="Enter oldprice" className='form-box' name="oldprice" value={oldprice} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && oldprice?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>



                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>saleprice</Form.Label>
                                        <Form.Control type="text" placeholder="Enter saleprice" className='form-box' name="saleprice" value={saleprice} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && saleprice?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>discount </Form.Label>
                                        <Form.Control type="text" placeholder="Enter discount" className='form-box' name="discount" value={discount} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && discount?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Row>



                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>quantity</Form.Label>
                                        <Form.Control type="text" placeholder="Enter city" className='form-box' name="quantity" value={quantity} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && quantity?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasictext">
                                        <Form.Label className='mb-2'>color</Form.Label>
                                        <Form.Control type="text" placeholder="Enter description" className='form-box' name="color" value={color} onChange={handleChange} />
                                        <Form.Text className="text-muted">
                                            {error && color?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                        </Form.Text>
                                    </Form.Group></Col>
                            </Row>


                            <Col>
                                <Form.Group className="mb-3" controlId="formBasictext">
                                    <Form.Label className='mb-2'>size</Form.Label>
                                    <Form.Control type="text" placeholder="Enter size" className='form-box' name="size" value={size} onChange={handleChange} />
                                    <Form.Text className="text-muted">
                                        {error && size?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                    </Form.Text>
                                </Form.Group></Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="formBasictext">
                                    <Form.Label className='mb-2'>thumbimage</Form.Label>
                                    <Form.Control type="text" placeholder="Enter thumbimage" className='form-box' name="thumbimage" value={thumbimage} onChange={handleChange} />
                                    <Form.Text className="text-muted">
                                        {error && thumbimage?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                    </Form.Text>
                                </Form.Group></Col>


                            <Form.Group className="mb-3" controlId="formBasictext">
                                <Form.Label className='mb-2'>description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="description...."
                                    style={{ height: '100px' }}
                                    name="description" value={description} onChange={handleChange}
                                />
                                <Form.Text className="text-muted">
                                    {error && description?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                </Form.Text>
                            </Form.Group>


                            <Col>
                                <Form.Group className="mb-3" controlId="formBasictext">
                                    <Form.Label className='mb-2'>multiimags</Form.Label>
                                    <Form.Control type="text" placeholder="Enter multiimg" className='form-box' name="multiimg" value={multiimg} onChange={(e) => setMultimg(e?.target?.value)} />
                                    <Form.Text className="text-muted">
                                        {error && multiimg?.length <= 0 ? <span className='text-danger'>Filed is Required</span> : null}
                                    </Form.Text>
                                </Form.Group>

                                <div className='mb-4'>
                                    <button className='edit-btn' onClick={() => handleImages(multiimg)}>Add Image</button>
                                </div>
                            </Col>


                            <div className='mb-4 row  gap-2'>
                                {multiimages?.map((item, index) => {
                                    return (
                                        <div className='cards col-lg-1'>
                                            <img src={item} alt="no images" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                        </div>
                                    )
                                })}
                            </div>



                            <button className='submit-button mb-5' onClick={SubmitData}>
                                Create Address
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addproduct