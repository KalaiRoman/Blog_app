import React, { useEffect, useState } from 'react'
import './styles/Products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CartAdd } from '../../../redux/reducer/Cart_reducer';
import { GetProductActions } from '../../../redux/actions/CreateProductActions';
import { FavortActionData, FavortAllActionData } from '../../../redux/actions/FavortsActions';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
function Products() {

    const navigate = useNavigate();
    const token = localStorage.getItem("blog_token");
    const final = jwt_decode(token);
    const dispatch = useDispatch();
    const [filterCart, setFilterCart] = useState([]);
    const [filterfavort, setFilterFavort] = useState([]);

    const stateCart = useSelector((state) => state?.cart?.CartData);
    const productsdata = useSelector((state) => state?.product);
    const favortstate = useSelector((state) => state?.singleuser?.Singleuser);

    console.log(favortstate?.wishlist, 'favortstate')





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

        setFilterFavort(favortsids);
        setFilterCart(filterid);
        dispatch(GetProductActions())

    }, [stateCart])




    useEffect(() => {


    }, [])





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
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>Shopping</h4>
                    </div>
                    <div>
                        <button className='edit-btn' onClick={() => window.location.assign("/ecommerce/addproduct")}>+ Add New Product</button>
                    </div>
                </div>
            </div>
            <main class="main bd-grid">
                {Products?.map((item, index) => {
                    return (
                        <div key={index}>
                            <div class="cardssss" >
                                <div onClick={() => navigate(`/ecommerce/productview`, { state: { productid: item?._id } })}>
                                    <div className='image-card-style'>
                                        <div class="card__imgs d-flex align-content-center justify-content-center">
                                            <img src={item?.thumbimage} alt="no image" className='image-product' />
                                        </div>
                                    </div>

                                    <div className='text-start mt-3'>
                                        {item?.productname?.slice(0, 40)}
                                    </div>

                                    <div className='d-flex justify-content-between mb-3 mt-2'>
                                        <div className=''>Price  ₹ {item?.saleprice}</div>

                                        <div className='text-danger'> ₹ {item?.oldprice}</div>
                                    </div>
                                </div>


                                <div class="d-flex justify-content-between align-items-center">
                                    {favortstate?.wishlist?.includes(item?._id) ? <>
                                        <div class="card__icon" onClick={() => favortProduct(item?._id)}>
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/640px-Heart_coraz%C3%B3n.svg.png" alt="no image" className='unlike-heart' />

                                        </div>
                                    </> : <>
                                        <div class="card__icon" onClick={() => favortProduct(item?._id)}><ion-icon name="heart-outline"></ion-icon></div>
                                    </>}
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