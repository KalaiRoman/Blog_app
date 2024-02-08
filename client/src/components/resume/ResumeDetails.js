import React, { useEffect } from 'react'

function ResumeDetails({ alldatas }) {
    const { personDetails,
        Educations,
        Skills,
        Projects,
        Hobbies,
        Languages,
        WorkExperience } = alldatas ? alldatas : {};



    useEffect(() => {
    }, [alldatas])
    return (
        <div>
            {personDetails && personDetails[0]?.name ? <>
                <div className='cards w-100'>
                    <div className='p-3 d-flex '>
                        <div style={{ width: "80%" }}>
                            <div className='fw-bold fs-3'>
                                {personDetails[0]?.name}
                            </div>
                            <div className='mt-2'>
                                {personDetails[0]?.role}
                            </div>
                            <div className='mt-2' style={{ width: "100%" }}>
                                {personDetails[0]?.description}
                            </div>
                        </div>
                        <div style={{ width: "20%" }}>
                            <img src={personDetails[0]?.profileimage} alt="no image"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-between' style={{
                        padding: "0px 40px"
                    }}>
                        <div>
                            {personDetails[0]?.email}
                        </div>
                        <div>
                            {personDetails[0]?.phoneno}

                        </div>
                        <div>
                            {personDetails[0]?.location}
                        </div>
                    </div>
                </div>
            </> : <></>}

            <div className='d-flex gap-3 mt-3'>
                <div className='col-lg-6'>
                    <div>
                        <div>
                            <h5>Work Experience</h5>
                        </div>
                        <div>
                            {WorkExperience?.map((item, index) => {
                                return (
                                    <div key={index} className='card col-lg-12 mt-2 mb-3'>
                                        <div>
                                            {item?.worktitle}
                                        </div>
                                        <div>
                                            {item?.workcompanyName}
                                        </div>
                                        <div>
                                            {item?.workDescription}
                                        </div>
                                        <div className='flex-end text-end text-info'>
                                            {item?.workdate}
                                        </div>

                                        <div>
                                            {item?.worklocation}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>

                </div>
            </div>
        </div>
    )
}

export default ResumeDetails