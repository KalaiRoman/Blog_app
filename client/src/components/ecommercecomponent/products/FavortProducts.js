import React, { useEffect, useState } from 'react'
import { SingleuserActionData } from '../../../redux/actions/SingleuserAction';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductActions } from '../../../redux/actions/CreateProductActions';
import { FavortActionDatauser } from '../../../redux/actions/FavortsActions';
import Modal from 'react-bootstrap/Modal';
function FavortProducts() {
    const [show, setShow] = useState(false);
    const [whilistid, setWishlistId] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setShow(true)
        setWishlistId(id)
    };

    const [wishlistdata, setWishlistData] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state?.singleuser?.Singleuser);
    const productsdata = useSelector((state) => state?.product?.Products);

    useEffect(() => {
        dispatch(SingleuserActionData());
        dispatch(GetProductActions())

    }, [whilistid]);

    useEffect(() => {
        let whishlistData = [];
        if (productsdata) {
            productsdata?.map((item) => {
                state?.wishlist?.map((items) => {
                    if (item?._id === items) {
                        whishlistData.push(item)
                    }
                })
            })
        }
        setWishlistData(whishlistData)
    }, [productsdata]);


    const favortProduct = () => {
        const productfavortsid = {
            productId: whilistid
        }
        dispatch(FavortActionDatauser(productfavortsid));
        handleClose();
    }


    return (
        <div className='container'>
            <div className='mb-4 mt-3'>
                <h3>Your Favort's</h3>
            </div>
            {wishlistdata?.map((item, index) => {
                const { productname,
                    oldprice,
                    saleprice,
                    discount,
                    quantity,
                    description,
                    thumbimage,
                    imagestore,
                    color,
                    size, } = item;
                return (
                    <div className='card col-lg-12 mt-2 mb-2' key={index}>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-5'>
                                <div>
                                    <img src={thumbimage} alt="no image" style={{ width: "100px", height: "100px", cursor: "pointer", objectFit: "contain", border: "1px solid #F875AA", padding: "5px", borderRadius: "10px" }} />
                                </div>
                                <div>
                                    <div className='w-75' style={{ lineHeight: "20px" }}>
                                        <div style={{ lineHeight: 1.6 }}>{productname?.slice(0, 100)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center'>
                                <button className='delete-btn' onClick={() => handleShow(item?._id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Your Favort Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        Are you sure want to remove this item from your Favorts?
                    </div>

                    <div className='d-flex mb-4 mt-5 gap-5'>
                        <button className='edit-btn'>Cancel</button>
                        <button className='delete-btn' onClick={favortProduct}>Delete</button>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default FavortProducts