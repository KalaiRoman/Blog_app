import React, { useEffect, useState } from 'react'
import './styles/Dasboard.scss';
import Cards from './Cards';
import { useDispatch, useSelector } from 'react-redux';
import { filterActionData, getBlogActionData } from '../../redux/actions/CreateBlogActions';
import Form from 'react-bootstrap/Form';
function Dashboard() {
    const dispatch = useDispatch();

    const [selectoption, setSelectOption] = useState("");
    const state = useSelector((state) => state?.blog?.Blogdata);
    useEffect(() => {
        dispatch(getBlogActionData());
    }, [])




    const optionData = ['Cricket', "IT Solutions", "Reactjs Developer", "Nodejs Developer", "Python Developer", "Cow", "Tree", "KTM Bike", "NS200", "News", "Art", "Laptops", "Mac", "IPhone"]


    const onChangeData = (e) => {
        setSelectOption(e.target.value);
        dispatch(filterActionData(e.target.value))
    }

    const AllData = (all) => {
        dispatch(filterActionData(all))
        setSelectOption("");


    }

    return (
        <div className='main-dashboard-section'>
            <div className='container'>

                <div className='mb-4 d-flex justify-content-between'>
                    <h2>All User Posts</h2>
                    <div className='d-flex gap-3 align-items-center justify-content-around'>
                        <div className='col-lg-8'>
                            <Form.Select aria-label="Default select example" name="" value={selectoption} onChange={onChangeData}>
                                <option value="" disabled selected>--Filter Categorys--</option>
                                {optionData?.map((item) => {
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })}
                            </Form.Select>
                        </div>
                        <div className='col-lg-5'>
                            <button className='edit-btn' onClick={() => AllData("All")}>
                                All Datas
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row gap-4'>

                    {state?.length > 0 ? <>
                        {state?.map((item, index) => {
                            return (
                                <div key={index} className='cards col-lg-3'>
                                    <Cards data={item} />
                                </div>
                            )
                        })}
                    </> : <div className='text-center d-flex align-items-center justify-content-center'>
                        <h2>No Post Here!</h2>
                    </div>}

                </div>
            </div>
        </div >
    )
}

export default Dashboard