import React, { useEffect } from 'react'
import Cards from './Cards'
import './styles/Author.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AlluserActionData } from '../../redux/actions/AllUserActions';
import jwt_decode from 'jwt-decode';

function Author() {
    const token = localStorage.getItem("blog_token");
    const final = jwt_decode(token);
    const dispatch = useDispatch();
    const state = useSelector((state) => state?.alluser?.allusers);
    useEffect(() => {
        dispatch(AlluserActionData());
    }, [])
    return (
        <div>
            <div className='container'>
                <div className='row gap-4'>
                    {state?.map((item, index) => {
                        return (
                            <div key={index} className={`${final?.id === item?._id ? "activecard col-lg-3" : "card col-lg-3 "}`}>
                                <Cards data={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Author