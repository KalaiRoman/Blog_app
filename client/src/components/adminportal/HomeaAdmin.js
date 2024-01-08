import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetProductActions } from '../../redux/actions/CreateProductActions';
import { getBlogActionData } from '../../redux/actions/CreateBlogActions';
import { AlluserActionData } from '../../redux/actions/AllUserActions';

function HomeaAdmin() {
    const dispatch = useDispatch();
    const productsdata = useSelector((state) => state?.product);
    const { loading, Products } = productsdata;
    const state = useSelector((state) => state?.blog?.Blogdata);

    const users = useSelector((state) => state?.alluser?.allusers);

    useEffect(() => {
        dispatch(GetProductActions());
        dispatch(getBlogActionData());
        dispatch(AlluserActionData());
    }, [])

    return (
        <div className='container'>
            <div className='row d-flex gap-4'>
                <div className='cards d-flex align-content-center justify-content-center text-center' style={{ width: "18rem" }}>
                    <div className='mb-2 fw-bold fs-3'>
                        <h1>{users?.length - 1}</h1>
                    </div>
                    <h5>Users</h5>
                </div>
                <div className='cards col-lg-4 d-flex align-content-center justify-content-center text-center' style={{ width: "18rem" }}>
                    <div className='mb-2 fw-bold fs-3'>
                        <h1>{state?.length}</h1>
                    </div>
                    <h5>Blog Posts</h5>
                </div>
                <div className='col-lg-4 cards d-flex align-content-center justify-content-center text-center' style={{ width: "18rem" }}>

                    <div className='mb-2 fw-bold fs-3'>
                        <h1>{Products?.length}</h1>
                    </div>

                    <h5>Products</h5>


                </div>
            </div>
        </div>
    )
}

export default HomeaAdmin