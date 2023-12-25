import React, { useEffect, useState } from 'react'
import './styles/Products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CartAdd } from '../../../redux/reducer/Cart_reducer';
import { GetProductActions } from '../../../redux/actions/CreateProductActions';
function Products() {
    const dispatch = useDispatch();
    const [filterCart, setFilterCart] = useState([]);
    const stateCart = useSelector((state) => state?.cart?.CartData);
    const productsdata = useSelector((state) => state?.product);

    const { loading, Products } = productsdata;

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
            filterid.push(item?._id);
        })
        setFilterCart(filterid);
        dispatch(GetProductActions())
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
                {Products?.map((item, index) => {
                    return (
                        <div key={index}>
                            <div class="cardssss">
                                <div class="card__img">
                                    <img src={item?.thumbimage} alt="no image" className='image-product' />
                                </div>

                                <div className='text-start'>
                                    {item?.productname}
                                </div>

                                <div className='d-flex justify-content-between mb-3 mt-2'>
                                    <div className=''>Price  ₹ {item?.saleprice}</div>

                                    <div className='text-danger'> ₹ {item?.oldprice}</div>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <a href="" class="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>
                                    {filterCart?.includes(item?._id) ? <div className='text-success'>Added to cart</div> : <>
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