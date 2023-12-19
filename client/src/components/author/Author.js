import React, { useEffect } from 'react'
import Cards from './Cards'
import './styles/Author.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AlluserActionData } from '../../redux/actions/AllUserActions';
function Author() {
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
                            <div key={index} className='card col-lg-3'>
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