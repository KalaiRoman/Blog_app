import React, { useState, useEffect } from 'react'
import './Qr.scss';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
function QrCode() {

    const [users, setUsers] = useState({
        url: "",
        size: ""
    });

    const [imageurl, setImageurl] = useState("");

    const [loading, setLoading] = useState(false);

    const { url, size } = users;


    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    }

    const handleSubmit = async () => {
        setLoading(true)
        try {

            const response = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;

            if (response) {
                setTimeout(() => {
                    setImageurl(response);
                    setLoading(false);
                }, 400);
            }

        } catch (error) {
            setLoading(false);

        }

    }

    const downlaodUrl = async () => {
        try {
            const response = await fetch(imageurl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob();
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.startsWith('image')) {
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = "qr_code.png";
                document.body.appendChild(link);
                link.click();
            } else {
                throw new Error('Response is not an image');
            }
        } catch (error) {
            console.error('Error downloading QR code:', error);
        }
    };

    return (
        <div className='main-qr'>
            <div className='inside-qr'>

                <div className='mb-4 '>
                    <h3>Qr</h3>
                </div>
                <div>

                    {loading ? <>

                        loading...
                    </> : <>

                        {imageurl ? <>
                            <img src={imageurl} alt="" title="" />

                        </> : <>
                            <img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=200x200" alt="" title="" />

                        </>}
                    </>}

                </div>

                <div className='mt-4'>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Your URL</Form.Label>
                                <Form.Control type="text" placeholder="Enter URL"

                                    name="url" value={url} onChange={handleChange}
                                />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Size</Form.Label>
                                <Form.Control type="text" placeholder="Enter Size"
                                    name="size" value={size} onChange={handleChange}
                                />
                                <Form.Text className="text-muted">

                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>

                <div className='mt-4 d-flex gap-4'>

                    <Col lg="6">
                        <button className='edit-btn' onClick={handleSubmit}>Create Code</button>

                    </Col>
                    <Col lg="6">
                        <button className='edit-btn' onClick={downlaodUrl}>Download QR</button>

                    </Col>

                </div>


            </div>
        </div>
    )
}

export default QrCode