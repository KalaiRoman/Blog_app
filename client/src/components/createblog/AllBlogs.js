import React, { useEffect } from 'react'
import Cards from './Cards';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentuserallBlogActionData } from '../../redux/actions/CreateBlogActions';


function AllBlogs() {

    const { state } = useLocation();

    const dispatch = useDispatch();
    const states = useSelector((state) => state?.currentblog?.CurrentUserBlogs);
    useEffect(() => {
        dispatch(getCurrentuserallBlogActionData(state?.id));
    }, [state?.id])

    const navigate = useNavigate();

    const CreateBlogNew = () => {
        navigate("/createblog")
    }

    return (
        <div>
            <div className='container'>

                <div>
                    <div className='row gap-4'>



                        {states?.map((item, index) => {
                            return (
                                <div key={index} className='cards col-lg-3'>
                                    <Cards data={item} id={null} />
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