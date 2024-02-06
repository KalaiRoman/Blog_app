import React, { useEffect, useState } from 'react'
import { getallResumeService } from '../../services/resume_service/resume_service'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom';
import ConvertPdf from './ConvertPdf';
function Resume() {
    const navigate = useNavigate();
    const [listresumes, setListresumes] = useState([]);
    useEffect(() => {
        getallResumeService().then((res) => {
            setListresumes(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const ResumeNavigate = (id) => {
        navigate('/createresume', {
            state: { id: id }
        })
    }

    return (
        <div className='containers'>
            <div className='d-flex justify-content-between p-3'>
                <div>
                    Resumes
                </div>
                <div>
                    <button className='edit-btn' onClick={() => window.location.assign("/createresume")}>+ Create Resume</button>
                </div>
            </div>
            <div>

                <div className='container mt-4'>
                    <div className='row d-flex gap-3'>
                        {listresumes?.map((item, index) => {
                            return (
                                <div className='cards col-lg-2' key={index}>
                                    <div className='d-flex gap-3 justify-content-between align-items-center' style={{
                                        padding: "5px",
                                        borderRadius: "10px",
                                        color: "grey"
                                    }}>
                                        <div>
                                            <div>
                                                {item?.personDetails[0]?.name}
                                            </div>
                                            <div>
                                                {item?.personDetails[0]?.role}
                                            </div>
                                            <div>
                                                {item?.personDetails[0]?.email}
                                            </div>
                                            <div>
                                                {item?.personDetails[0]?.phoneno}
                                            </div>
                                            <div>
                                                {item?.personDetails[0]?.location}
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                {item?.personDetails[0]?.profileimage ? <>

                                                    <img src={item?.personDetails[0]?.profileimage} alt="no image"
                                                        style={{
                                                            width: "60px",
                                                            height: "60px",
                                                            borderRadius: "50%",
                                                            objectFit: "cover"
                                                        }}
                                                    /></> : <>

                                                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HrjlxizejA_sfkfPhIaAdv5Cxy6A-HGFzA&usqp=CAU'} alt="no image"
                                                        style={{
                                                            width: "60px",
                                                            height: "60px",
                                                            borderRadius: "50%",
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                </>}


                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center gap-5 mt-4'>
                                        <div className='w-25'>
                                            <button className='delete-btn w-auto' onClick={() => ResumeNavigate(item?._id)}>Edit</button>
                                        </div>
                                        <div className='w-75'>
                                            <div className=''>
                                                <ConvertPdf />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className='container'>
                    {listresumes?.length === 0 ? <div className='row d-flex gap-4'>
                        {Array(10).fill("kalai")?.map((item, index) => {
                            return (
                                <div className='cards col-lg-3 h-100' key={index}>
                                    <Skeleton />
                                </div>
                            )
                        })}
                    </div> : null}
                </div>

            </div>
        </div>
    )
}

export default Resume