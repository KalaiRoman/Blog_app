import React from 'react'
import ReactHtmlParser from 'react-html-parser';
function Cards({ data }) {
    return (
        <div>
            <div>
                {data?.avatar ? <>
                    <img className="dashobard-image" src={data?.avatar} alt="no image" />
                </> : <>
                    <img className="dashobard-image" src={'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'} alt="no image" />
                </>}
            </div>
            <div className='mt-3 fw-bold'>
                {data?.title}
            </div>
            <div className='fs-6 mt-2'>
                {ReactHtmlParser(data?.description)}
            </div>
            <div className='d-flex gap-3'>
                <div>
                    <div>
                        <img className="dashobard-images" src={data?.user?.avatar} alt="no image" />

                    </div>
                </div>
                <div className='d-flex gap-5'>
                    <div>
                        <div>
                            {data?.user?.userName}
                        </div>
                        <div>
                            {data?.user?.posts} posts
                        </div>
                    </div>
                    <div>
                      <div>
                        <button className='type-btn'>
                        {data?.type}
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards