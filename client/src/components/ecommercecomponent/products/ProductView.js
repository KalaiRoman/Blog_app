import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './styles/Productview.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetSingleProductActions } from '../../../redux/actions/CreateProductActions';
function ProductView() {
    const dispatch = useDispatch();
    const { state } = useLocation();
    const [currentindex, setCurrentIndex] = useState(0);
    const [show, setShow] = useState(false);
    const produtdata = useSelector((state) => state?.product?.singleProduct);
    useEffect(() => {
        if (state?.productid) {
            dispatch(GetSingleProductActions(state?.productid));
        }
    }, [state?.productid, currentindex]);

    const sizes = produtdata?.size?.split(",");

    console.log(produtdata, 'produtdata?.user?')

    return (
        <div className='main-view-product'>
            <div className='inside-view'>
                <div className='left-view'>
                    <div className='left-inaide-view'>
                        <div className='left-inside-left'>
                            <div className='image-left-cards'>
                                <div className='image-left-height'>
                                    {produtdata && produtdata?.imagestore?.map((item, index) => {
                                        return (
                                            <div className={currentindex === index ? "active-card mb-2 mt-2" : 'image-card-lefts mt-2 mb-2'} key={index} onClick={() => setCurrentIndex(index)}>
                                                <img src={item} alt="no image" className='active-imagecard' />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='left-inside-right'>
                            {<div>
                                <img src={produtdata?.imagestore && produtdata?.imagestore[currentindex || 0]} alt="no image" className='right-image-product' />
                            </div>}
                        </div>
                    </div>
                </div>
                <div className='right-view'>
                    <div className='mt-4 mb-3'>
                        <h3>{produtdata?.productname}</h3>
                    </div>
                    <div className='d-flex gap-3 align-items-center'>
                        <div>
                            <div className='fw-bold fs-4'>₹ {produtdata?.saleprice}</div></div>
                        <div className='fw-bold text-danger fs-4'>
                            <span>₹ <del>{produtdata?.oldprice}</del></span>
                        </div>
                    </div>
                    <div className='mb-3 mt-4'>
                        Size : <span className='fw-bold text-primary row '>
                            <div className='row gap-3 mt-3 mb-2'>
                                {sizes?.map((item, index) => {
                                    return (
                                        <div style={{ width: "auto", height: "auto", border: "1px solid #8ACDD7", padding: "4px 10px", borderRadius: "5px", textAlign: "center", cursor: "pointer" }}>
                                            {item}
                                        </div>
                                    )
                                })}
                            </div>
                        </span>
                    </div>
                    <div>
                        Color : <span className='fw-bold'>{produtdata?.color}</span>
                    </div>
                    <div className='d-flex gap-4 flex-column w-50 mx-auto mt-5'>
                        <div>
                            <button className='edit-btn'>Add to Cart</button>
                        </div>
                        <div>
                            <button className='delete-btn'> Buy Now</button>
                        </div>
                    </div>

                    <div className=' mt-3 '>
                        <div className='mb-1 fs-6'>
                            Seller :  <span className='fw-bold ms-1' style={{ textTransform: "capitalize" }}>
                                {produtdata?.user?.userName}
                            </span>
                        </div>

                    </div>
                    <div className='mt-3'>
                        Description:
                        <div className='fw-medium fs-6 mt-3'>
                            {show ? <>
                                {produtdata?.description} <span className="text-danger fw-bold cursor" onClick={() => setShow(false)}>Less More...</span>
                            </> : <>
                                {produtdata?.description?.slice(0, 150)}<span className='text-danger ms-2 cursor' onClick={() => setShow(true)}>Read More...</span>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductView