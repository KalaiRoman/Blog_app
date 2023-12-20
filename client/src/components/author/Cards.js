import React from 'react'
import moment from 'moment';
function Cards({ data }) {

    return (
        <div>
            <div className='d-flex '>

                <div>
                    {data?.avatar ? <>
                        <img className="userimage" src={data?.avatar} alt="no image" />

                    </> : <>
                        <img className="userimage" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />

                    </>}
                </div>
                <div className='ms-4'>
                    <div className='fw-bold fs-5 mt-2'>
                        {data?.userName}
                    </div>
                    <div className='mt-2 d-flex align-items-center gap-2'>
                        <span className='fw-bold text-danger'>{data?.posts}</span> Posts
                    </div>
                    {/* <div className='d-flex gap-2 mt-2 mb-4'>
                        Created On : {moment(data?.createdAt).format('ll')}
                    </div> */}
                </div>
            </div>

        </div>
    )
}

export default Cards