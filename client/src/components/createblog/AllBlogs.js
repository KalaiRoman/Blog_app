import React from 'react'
import Button from 'react-bootstrap/Button';
import Cards from './Cards';
import { useNavigate } from 'react-router-dom';
function AllBlogs() {

    const navigate = useNavigate();

    const CreateBlogNew = () => {
        navigate("/createblog")
    }
    return (
        <div>
            <div className='container'>
                <div className='d-flex justify-content-end mb-5'>
                    <Button className='primary' onClick={CreateBlogNew}>Create Blog +</Button>
                </div>
                <div>
                    <div className='row gap-4'>
                        {Array(10)?.fill("number")?.map((item, index) => {
                            return (
                                <div key={index} className='cards col-lg-3'>
                                    <Cards data={index + 1} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllBlogs