import React, { useEffect, useState } from 'react'
import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CartDelete } from '../../../redux/reducer/Cart_reducer';
import { useNavigate } from 'react-router-dom';
import { currentUserAddress, currentUserDeleteAddress } from '../../../redux/actions/CreateAddressActions';
import { deleteDddressService } from '../../../services/address_service/Address_service';
import { OrderAction } from './../../../redux/actions/orderActions';
import { DeletecartActions, GetcartActions, UpdateQuantityDecrementcartActions, UpdateQuantitycartActions } from '../../../redux/actions/CartActions';
import { createOrderService } from '../../../services/order_service/order_services';
function Cart() {
    const [paymenttype, setPaymenttype] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state?.cart?.CartData);
    const address = useSelector((state) => state?.address);
    const usercart = useSelector((state) => state?.usercart?.UsercartData);
    const { loading, Addresss } = address;
    const [addresscolor, setAddressColor] = useState({});
    const AddressSelelct = (data) => {
        setAddressColor(data);
    }
    const datas = [1, 2, 3];
    const payments = ["Paypal", "PhonePay", "GooglePay"];
    const DeleteCart = (id) => {
        dispatch(CartDelete(id));
        dispatch(DeletecartActions(id))
    }
    const addressPath = () => {
        navigate("/ecommerce/address")
    }
    useEffect(() => {
        dispatch(currentUserAddress())
        dispatch(GetcartActions())
    }, []);

    const DeleteAddress = (id) => {
        dispatch(currentUserDeleteAddress(id));
    }



    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }


    const ConfirmOrder = async () => {
        const datas = {
            addressid: addresscolor?._id,
            paymentMethod: paymenttype,
            order: usercart,
            currency: "INR",

        }

        // const res = await loadScript(
        //     "https://checkout.razorpay.com/v1/checkout.js"
        // );
        // if (!res) {
        //     alert("Razorpay SDK failed to load. Are you online?");
        //     return;
        // }

        // createOrderService(datas)
        //     .then((res) => {
        //         const data = res.data;
        //         const user_payment_id = data.user_payment_id;
        //         const options = {
        //             key: 'Iw5mR7eG6owK7bGjyrVEtydo',
        //             currency: data.currency,
        //             amount: "200",
        //             order_id: data.id,
        //             name: "kalai",
        //             description: "Paying For Course",
        //             image: "logo",
        //             handler: async function (data) {
        //                 // const update_userpayment = { 
        //                 //   user_payment_id,
        //                 //   paymentId: data.razorpay_payment_id,
        //                 //   master_id: cartid,
        //                 //   orderId: data.razorpay_order_id,
        //                 //   signature: data.razorpay_signature,
        //                 //   coupon: applyCode,
        //                 // };
        //                 // payPutService(update_userpayment)
        //                 //   .then(async (res) => {
        //                 //     setLoading(false);
        //                 //     Cookies.remove("Buynowourses");
        //                 //   })
        //                 //   .catch((error) => {
        //                 //     setLoading(false);
        //                 //   });
        //             },
        //             modal: {
        //                 ondismiss: async function () {
        //                 },
        //             },
        //         };
        //         const paymentObject = new window.Razorpay(options);
        //         paymentObject.open();
        //     })
        //     .catch((err) => {
        //     });
        dispatch(OrderAction(datas, navigate));
    }


    const QuantityIncrease = async (id) => {
        try {

            dispatch(UpdateQuantitycartActions(id));
        } catch (error) {

        }
    }

    const QuantityDecrease = async (id) => {
        try {

            dispatch(UpdateQuantityDecrementcartActions(id));
        } catch (error) {

        }
    }





    return (
        <div className='main-cart'>
            <div className='ms-5 mb-3 mt-2'>
                <h2>Cart</h2>
            </div>

            {usercart?.length > 0 ? <>
                <div className='inside-main-cart'>

                    <div className='left'>
                        {usercart?.map((item, index) => {
                            return (
                                <div className='cardss mt-3 mb-3 col-lg-12' key={index}>
                                    <div className='image-cart'>
                                        <img src={item?.product?.thumbimage} alt="" className='product-image' />
                                    </div>
                                    <div className='price-cart'>
                                        {item?.product?.productname}
                                        <div className='mt-3 mb-3 fw-bold fs-5'>
                                            ₹ {item?.product?.saleprice}
                                        </div>
                                    </div>

                                    <div className='action-cart'>

                                        <div className='qunaity-btn'>
                                            <div className='minus-btn' onClick={() => QuantityDecrease(item?.product?._id)}>
                                                -
                                            </div>
                                            <div className='fw-bold'>
                                                {item?.product?.userquantity}
                                            </div>
                                            <div className='plus-btn' onClick={() => QuantityIncrease(item?.product?._id)}>
                                                +
                                            </div>
                                        </div>

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
                                        <div key={index}
                                            className='address-card'
                                            style={{
                                                backgroundColor: addresscolor?._id == item?._id ? "#28FFBF" : ""
                                            }}
                                        >

                                            <div onClick={() => AddressSelelct(item)}>
                                                <div>
                                                    <span>{item?.username}  <span className='text-danger'>Contact : {item?.contactno}, {item?.alternateno}</span></span>, <span style={{ color: "black", fontWeight: "700" }}>{item?.locationtype}</span>
                                                </div>
                                                <div>
                                                    <span>{item?.street}, {item?.city},{item?.pincode}</span>
                                                </div>
                                                <div>
                                                    {item?.address}
                                                </div>

                                            </div>

                                            <div className='d-flex mt-3 mb-2 gap-4 w-50'>
                                                <button className='edit-btn' onClick={() => navigate("/ecommerce/address", { state: { addressId: item?._id } })}>Edit</button>
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
                                            <div className='cardss col-lg-5 text-center' key={index} onClick={() => setPaymenttype(item)}

                                                style={{
                                                    backgroundColor: paymenttype == item ? "#28FFBF" : ""
                                                }}
                                            >
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
                                        {usercart?.length <= 9 ? <>0{usercart?.length}</> : <>{usercart?.length}</>}
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
                                        ₹ {usercart?.reduce((acc, current) => {
                                            return acc + Number(current?.product?.saleprice)
                                        }, 0)}
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <hr />
                                </div>
                                <div className='p-3 d-flex justify-content-between'>
                                    <div>
                                        <h4>Total</h4>
                                    </div>
                                    <div>
                                        <h4>₹ {usercart?.reduce((acc, current) => {
                                            return acc + Number(current?.product?.saleprice)
                                        }, 0)}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className='edit-btn p-3' onClick={ConfirmOrder}>Confirm Order</button>
                        </div>
                    </div>
                </div>
            </> : <>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh", flexDirection: "column", gap: "30px" }}>
                    <div>
                        <img src="https://limasy.com/img/empty-animation1.gif" alt="no image" style={{ width: "100%", height: "200px", borderRadius: "20px", objectFit: "contain" }} />
                    </div>
                    <div>
                        <h6>Your Cart is Empty Shop Now..</h6>
                    </div>
                    <button className='edit-btn' style={{ width: "300px" }}
                        onClick={() => window.location.assign("/ecommerce")}
                    >
                        Shop Now...
                    </button>
                </div>
            </>}

        </div>
    )
}

export default Cart