import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Cards from './Cards';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogActionData } from '../../redux/actions/CreateBlogActions';
function AllBlogs() {

    const dispatch = useDispatch();

    const state = useSelector((state) => state?.blog?.Blogdata);


    useEffect(() => {
        dispatch(getBlogActionData());
    }, [])

    const navigate = useNavigate();

    const CreateBlogNew = () => {
        navigate("/createblog")
    }
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-end mb-5'>
                    <Button className='primary' onClick={CreateBlogNew}>Create Blog +</Button>
                </div>
                <div>
                    <div className='row gap-4'>
                        {state?.map((item, index) => {
                            return (
                                <div key={index} className='cards col-lg-3'>
                                    <Cards data={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBlogs