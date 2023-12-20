import React, { useEffect } from 'react'
import Cards from './Cards'
import './styles/Author.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AlluserActionData } from '../../redux/actions/AllUserActions';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Author() {
    const token = localStorage.getItem("blog_token");
    const final = jwt_decode(token);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const state = useSelector((state) => state?.alluser?.allusers);
    useEffect(() => {
        dispatch(AlluserActionData());
    }, []);



    const createPathnavigate = (id) => {

        if (id) {
            navigate("/allblogs", {
                state: { id: id }
            })
        }
        else {
            navigate("/allblogs")
        }

    }
    return (
        <div>
            <div className='container'>
                <div className='row gap-4'>
                    {state?.map((item, index) => {
                        return (
                            <div key={index} className={`${final?.id === item?._id ? "activecard col-lg-3" : "card col-lg-3 "}`} onClick={() => {
                                if (final?.id === item?._id) {
                                    createPathnavigate(item?._id)
                                }
                                else {
                                    createPathnavigate(item?._id)
                                }
                            }}>
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