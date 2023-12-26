import React, { useEffect, useState } from 'react'
import './styles/Products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CartAdd } from '../../../redux/reducer/Cart_reducer';
import { GetProductActions } from '../../../redux/actions/CreateProductActions';
import { FavortActionData, FavortAllActionData } from '../../../redux/actions/FavortsActions';
import jwt_decode from 'jwt-decode';
function Products() {
    const token = localStorage.getItem("blog_token");
    const final = jwt_decode(token);
    const dispatch = useDispatch();
    const [filterCart, setFilterCart] = useState([]);
    const [filterfavort, setFilterFavort] = useState([]);

    const stateCart = useSelector((state) => state?.cart?.CartData);
    const productsdata = useSelector((state) => state?.product);
    const favortstate = useSelector((state) => state?.favort);

    const fP= favortstate?.Favortss;

    console.log(fP, 'Favortss')


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

        let favortsids = [];
        fP?.map((item) => {
         favortsids?.push(item?.productId);
        })
        setFilterFavort(favortsids);
        setFilterCart(filterid);
        dispatch(GetProductActions())
        dispatch(FavortAllActionData());

    }, [stateCart])




    useEffect(() => {

       
    }, [])



    console.log(filterfavort,'filterfavort')


    const AddTocart = (data) => {
        dispatch(CartAdd(data));
    }

    const favortProduct = (productid) => {

        const productfavortsid = {
            productId: productid
        }
        dispatch(FavortActionData(productfavortsid));
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
                                <div class="card__imgs d-flex align-content-center justify-content-center">
                                    <img src={item?.thumbimage} alt="no image" className='image-product' />
                                </div>

                                <div className='text-start mt-3'>
                                    {item?.productname}
                                </div>

                                <div className='d-flex justify-content-between mb-3 mt-2'>
                                    <div className=''>Price  ₹ {item?.saleprice}</div>

                                    <div className='text-danger'> ₹ {item?.oldprice}</div>
                                </div>

                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="card__icon" onClick={() => favortProduct(item?._id)}><ion-icon name="heart-outline"></ion-icon></div>
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