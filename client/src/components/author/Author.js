import React, { useEffect } from 'react'
import Cards from './Cards'
import './styles/Author.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AlluserActionData } from '../../redux/actions/AllUserActions';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Author() {
    const token = localStorage.getItem("blog_token") ? localStorage.getItem("blog_token") : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const final = jwt_decode(token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state?.alluser?.allusers);
    useEffect(() => {
        dispatch(AlluserActionData());
    }, []);

    const createPathnavigate = () => {
        navigate("/currentuserblogs");

    }

    const createPathnavigatefalse = (id) => {
        navigate("/allblogs", {
            state: { id: id }
        });
    }
    return (
        <div>
            <div className='container'>
                <div className='row gap-4'>

                    {state?.length > 0 ? <>
                        {state?.map((item, index) => {
                            return (
                                <div key={index} className={`${final?.id === item?._id ? "activecard col-lg-3" : "card col-lg-3 "}`} onClick={() => {
                                    if (final?.id === item?._id) {
                                        createPathnavigate()
                                    }
                                    else {
                                        createPathnavigatefalse(item?._id)
                                    }
                                }}>
                                    <Cards data={item} />
                                </div>
                            )
                        })}
                    </> : <div className='d-flex align-items-center justify-content-center text-center'>
                        <h2>No Authors Here !</h2>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default Author