import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProductActions, ProductActionsCurrentuser } from '../../../redux/actions/CreateProductActions';
import { useNavigate } from 'react-router-dom';

function Ourproducts() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const product = useSelector((state) => state?.product);

    const { loading, CurrentuserProduct } = product;


    useEffect(() => {
        dispatch(ProductActionsCurrentuser())
    }, []);

    const deleteProduct = (id) => {
        dispatch(DeleteProductActions(id))
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-end'>
                <button className='edit-btn w-25' onClick={() => window.location.assign("/ecommerce/addproduct")}>+ Add New Product</button>
            </div>
            {CurrentuserProduct?.map((item, index) => {
                const { productname,
                    oldprice,
                    saleprice,
                    discount,
                    quantity,
                    description,
                    thumbimage,
                    imagestore,
                    size, } = item;
                return (
                    <div key={index} className='card mt-3 mb-3 border-none'>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex gap-4'>
                                <div>
                                    <img src={thumbimage} alt={"no image"} style={{ width: "100px", height: "100px", objectFit: "contain", border: "1px solid #CDF5FD", padding: "10px", borderRadius: "10px" }} />
                                </div>
                                <div>
                                    <div className='fw-medium'>
                                        {productname}
                                    </div>
                                    <div className='fw-bold fs-5 mt-2'>
                                        ₹ {saleprice} <span style={{color:"red",paddingLeft:"10px"}}><del>₹ {item?.oldprice}</del></span>
                                    </div>
                                    <div className='mt-2'>
                                        Size : {size}
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex gap-5 align-items-center'>
                                <div>
                                    <button className='edit-btn'
                                        onClick={() => navigate("/ecommerce/addproduct", { state: { productid: item?._id } })}
                                    >Edit</button>
                                </div>
                                <div>
                                    <button className='delete-btn'
                                        onClick={() => deleteProduct(item?._id)}
                                    >Delete</button>

                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Ourproducts