import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import './styles/Author.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AlluserActionData } from '../../redux/actions/AllUserActions';
import { useNavigate } from 'react-router-dom';
import { useGlobalContextApi } from '../../contextApi/Context';
import jwt_decode from 'jwt-decode';

function Author() {
    // const currentid = useGlobalContextApi();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state?.alluser?.allusers);
    const [filterusers, setFilterUsers] = useState([]);
    const token = localStorage.getItem("blog_token") ? localStorage.getItem("blog_token") : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const userid = jwt_decode(token);
    useEffect(() => {
        dispatch(AlluserActionData());
    }, []);


    const createPathnavigate = () => {
        navigate("/currentuserblogs");

    }

    useEffect(() => {

        let users = [];
        if (state) {
            state?.map((item, index) => {
                if (item?.userName == "admin") {

                }
                else {
                    users.push(item);
                }
            })
        }
        setFilterUsers(users)
    }, [state])

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
                        {filterusers?.map((item, index) => {
                            return (
                                <div key={index} className={`${userid?.id === item?._id ? "activecard " : "cardsss  "}`} onClick={() => {
                                    if (userid?.id === item?._id) {
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