import React, { useEffect, useState } from 'react'
import './styles/Products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CartAdd } from '../../../redux/reducer/Cart_reducer';
function Products() {
    const dispatch = useDispatch();
    const [filterCart, setFilterCart] = useState([]);
    const stateCart = useSelector((state) => state?.cart?.CartData);
    const productData = [
        {
            id: 1,
            name: "Shoes",
            desc: "no descriptinos",
            image: 'https://i.postimg.cc/8PkwdTYd/image.png',
            quantity: "0",
            price: "235",
            discount: "256"
        },
        {
            id: 2,
            name: "Shoes",
            desc: "no descriptinos",
            image: 'https://i.postimg.cc/4dBHXR1Z/image.png',
            quantity: "0",
            price: "235",
            discount: "256"
        },
        {
            id: 3,
            name: "Shoes",
            desc: "no descriptinos",
            image: 'https://i.postimg.cc/DfRL0nTy/image.png',
            quantity: "0",
            price: "235",
            discount: "256"
        },
        {
            id: 4,
            name: "Shoes",
            desc: "no descriptinos",
            image: 'https://i.postimg.cc/DfRL0nTy/image.png',
            quantity: "0",
            price: "235",
            discount: "256"
        },
    ]

    useEffect(() => {
        let filterid = [];
        stateCart?.map((item) => {
            filterid.push(item?.id);
        })
        setFilterCart(filterid);
    }, [stateCart])


    const AddTocart = (data) => {
        dispatch(CartAdd(data));
    }
    return (
        <div>
            <div className='container'>
                <h4>Shopping</h4>
            </div>
            <main class="main bd-grid">



                {productData?.map((item, index) => {
                    return (
                        <div key={index}>
                            <div class="cardssss">
                                <div class="card__img">
                                    <img src={item?.image} alt="" />
                                </div>

                                <div className='text-start'>
                                    {item?.name}
                                </div>

                                <div className='d-flex justify-content-between mb-3 mt-2'>
                                    <div className=''>Price  ₹ {item?.price}</div>

                                    <div className='text-danger'>Discount ₹ {item?.discount}</div>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">

                                    <a href="" class="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>


                                    {filterCart?.includes(item?.id) ? <div className='text-success'>Added to cart</div> : <>
                                        <div class="card__icon" onClick={() => AddTocart(item)}><ion-icon name="cart-outline"></ion-icon></div>
                                    </>}
                                </div>
                            </div>
                        </div>
                    )
                })}


            </main>
        </div>
    )
}

export default Products