import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './styles/Productview.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetSingleProductActions } from '../../../redux/actions/CreateProductActions';
function ProductView() {

    const dispatch = useDispatch();
    const { state } = useLocation();
    const [currentindex, setCurrentIndex] = useState(0);

    const produtdata = useSelector((state) => state?.product?.singleProduct);
    useEffect(() => {
        if (state?.productid) {
            dispatch(GetSingleProductActions(state?.productid));
        }
    }, [state?.productid, currentindex])

    return (
        <div className='main-view-product'>
            <div className='inside-view'>
                <div className='left-view'>
                    <div className='left-inaide-view'>
                        <div className='left-inside-left'>
                            <div className='image-left-cards'>
                                <div className='image-left-height'>
                                    {produtdata && produtdata?.imagestore?.map((item, index) => {
                                        return (
                                            <div className={currentindex === index ? "active-card mb-2 mt-2" : 'image-card-lefts mt-2 mb-2'} key={index} onClick={() => setCurrentIndex(index)}>
                                                <img src={item} alt="no image" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='left-inside-right'>
                            {<div>
                                <img src={produtdata?.imagestore && produtdata?.imagestore[currentindex || 0]} alt="no image" />
                            </div>}
                        </div>
                    </div>
                </div>
                <div className='right-view'>
                    riht
                </div>
            </div>
        </div>
    )
}

export default ProductView