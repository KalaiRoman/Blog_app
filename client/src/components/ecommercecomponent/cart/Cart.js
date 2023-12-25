import React, { useEffect, useState } from 'react'
import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CartDelete } from '../../../redux/reducer/Cart_reducer';
import { useNavigate } from 'react-router-dom';
import { currentUserAddress, currentUserDeleteAddress } from '../../../redux/actions/CreateAddressActions';
import { deleteDddressService } from '../../../services/address_service/Address_service';
function Cart() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state?.cart?.CartData);
    const address = useSelector((state) => state?.address);
    const { loading, Addresss } = address;
    const [addresscolor, setAddressColor] = useState({});
    const AddressSelelct = (data) => {
        setAddressColor(data);
    }
    const datas = [1, 2, 3];
    const payments = ["Paypal", "PhonePay", "GooglePay"];
    const DeleteCart = (id) => {
        dispatch(CartDelete(id));
    }
    const addressPath = () => {
        navigate("/ecommerce/address")
    }
    useEffect(() => {
        dispatch(currentUserAddress())
    }, []);

    const DeleteAddress = (id) => {
        dispatch(currentUserDeleteAddress(id));
    }
    return (
        <div className='main-cart'>
            <div className='ms-5 mb-3 mt-2'>
                <h2>Cart</h2>
            </div>
            <div className='inside-main-cart'>

                <div className='left'>
                    {cartData?.map((item, index) => {
                        return (
                            <div className='cardss mt-3 mb-3 col-lg-12' key={index}>
                                <div className='image-cart'>
                                    <img src={item?.thumbimage} alt="" className='product-image' />
                                </div>
                                <div className='price-cart'>
                                    {item?.productname}
                                    <div>
                                        ₹ {item?.saleprice}
                                    </div>
                                </div>
                                <div className='action-cart'>
                                    <button className='edits-btn text-center' onClick={() => DeleteCart(item?._id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='right'>
                    <div className='address-cart'>
                        <div className='ms-4 d-flex align-content-center justify-content-between'>
                            <div>
                                <h4>Address</h4>
                            </div>
                            <div>
                                <button className='address-btn' onClick={addressPath}>+ Add Address</button>
                            </div>
                        </div>

                        {loading ? <>Loaidng...</> : <>
                            {Addresss?.map((item, index) => {
                                return (
                                    <div key={index} className='address-card' style={{
                                        backgroundColor: addresscolor == item ? "#28FFBF" : ""
                                    }} >

                                        <div onClick={() => AddressSelelct(item)}>
                                            <div>
                                                <span>{item?.username}  <span className='text-danger'>Contact : {item?.contactno}, {item?.alternateno}</span></span>
                                            </div>
                                            <div>
                                                <span>{item?.street}, {item?.city},{item?.pincode}</span>
                                            </div>
                                            <div>
                                                {item?.address}
                                            </div>


                                        </div>

                                        <div className='d-flex mt-3 mb-2 gap-4 w-50'>
                                            <button className='edit-btn'>Edit</button>
                                            <button className='delete-btn' onClick={() => DeleteAddress(item?._id)}>Delete</button>
                                        </div>

                                    </div>
                                )
                            })}

                        </>}


                    </div>
                    <div className='payment-cart'>
                        <div className='ms-4'>
                            <h4>Payment</h4>
                        </div>
                        <div>
                            <div className='payment-row row gap-3 ms-2'>
                                {payments?.map((item, index) => {
                                    return (
                                        <div className='cardss col-lg-5 text-center' key={index}>
                                            <h5>{item}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='price-cart'>
                        <div className='ms-4'>
                            <h3>Price</h3>
                        </div>
                        <div className='price-checkout mt-3'>
                            <div className='d-flex justify-content-between p-3'>
                                <div>
                                    Quantity
                                </div>
                                <div className='fw-bold fs-5'>
                                    {cartData?.length <= 9 ? <>0{cartData?.length}</> : <>{cartData?.length}</>}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between p-3'>
                                <div>
                                    Discount
                                </div>
                                <div className='fw-bold fs-5'>
                                    0
                                </div>
                            </div>
                            <div className='d-flex justify-content-between p-3'>
                                <div>
                                    Price
                                </div>
                                <div className='fw-bold fs-5'>
                                    ₹ {cartData?.reduce((acc, current) => {
                                        return acc + Number(current?.saleprice)
                                    }, 0)}
                                </div>
                            </div>
                            <div className='p-2'>
                                <hr />
                            </div>
                            <div className='p-3 d-flex justify-content-between'>
                                <div>
                                    <h4> Total</h4>
                                </div>
                                <div>
                                    <h4>₹ {cartData?.reduce((acc, current) => {
                                        return acc + Number(current?.saleprice)
                                    }, 0)}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart