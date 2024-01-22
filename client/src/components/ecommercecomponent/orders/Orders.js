import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { OrderAllDatasAction, OrderUpdatesAction } from '../../../redux/actions/orderActions';

function Orders() {

    const dispatch = useDispatch();

    const states = useSelector((state) => state?.orders?.Orderss)

    useEffect(() => {
        dispatch(OrderAllDatasAction());
    }, [])

    const cancelOrder = (id) => {
        dispatch(OrderUpdatesAction(id))
    }

    return (
        <div className='container'>
            <div>
                <div className='mb-4 mt-1'>
                    <h2>My Orders</h2>
                </div>
                {states?.loading ? <>Loading...</> : <>
                    {states?.map((items, index) => {
                        return (
                            <div className='card col-lg-10 p-3 mb-4 mt-1 d-flex' style={{backgroundColor:!items?.orderstatus?"#FDCEDF":"white"}}>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div key={index}>
                                        {items?.order?.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <div className='d-flex justify-content-between align-items-center mb-4 mt-2'>
                                                        <div>
                                                            <div>
                                                                <img src={item?.product?.thumbimage} alt="no image" style={{
                                                                    width: "150px",
                                                                    height: "150px",
                                                                    objectFit: "contain"
                                                                }} />
                                                            </div>
                                                            <div className='mt-3 mb-1'>
                                                                {item?.product?.productname?.slice(0, 100)}
                                                            </div>
                                                            <div className='mt-2 fw-bold fs-5'>
                                                                ₹ {item?.product?.saleprice}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div>
                                        {items?.orderstatus ? <>
                                            <button className="edit-btn" onClick={() => cancelOrder(items?._id)}>Cancel Orders</button>
                                        </> : <>
                                            <button className="delete-btn">Cancel Order</button>
                                        </>}
                                    </div>
                                </div>



                            </div>
                        )
                    })}
                </>}

                {states?.length === 0 && <div className='fw-bold fs-3 text-center'>No Orders...</div>}

            </div>
        </div>
    )
}

export default Orders