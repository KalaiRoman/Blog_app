import React, { useEffect } from 'react'
import './styles/Dasboard.scss';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogActionData } from '../../redux/actions/CreateBlogActions';
function Dashboard() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state?.blog?.Blogdata);
    useEffect(() => {
        dispatch(getBlogActionData());
    }, [])

    return (
        <div className='main-dashboard-section'>
            <div className='container'>

                <div className='mb-4'>
                    <h2>All User Posts</h2>
                </div>
                <div className='row gap-4'>

                    {state?.length > 0 ? <>
                        {state?.map((item, index) => {
                            return (
                                <div key={index} className='cards col-lg-3'>
                                    <Cards data={item} />
                                </div>
                            )
                        })}
                    </> : <div className='text-center d-flex align-items-center justify-content-center'>
                        <h2>No Post Here!</h2>
                    </div>}

                </div>
            </div>
        </div >
    )
}

export default Dashboard