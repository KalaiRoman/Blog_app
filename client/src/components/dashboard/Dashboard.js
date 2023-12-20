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
        </div >
    )
}

export default Dashboard