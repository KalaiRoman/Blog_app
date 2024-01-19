import React, { useEffect, useState } from 'react'
import './styles/Products.scss';
import { useDispatch, useSelector } from 'react-redux';
import { CartAdd } from '../../../redux/reducer/Cart_reducer';
import { GetProductActions } from '../../../redux/actions/CreateProductActions';
import { FavortActionData, FavortAllActionData } from '../../../redux/actions/FavortsActions';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { AddcartActions, GetcartActions } from '../../../redux/actions/CartActions';
function Products() {

    const navigate = useNavigate();
    // const token = localStorage.getItem("blog_token") ? localStorage.getItem("blog_token") : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

    // const final = jwt_decode(token);
    const dispatch = useDispatch();
    const [filterCart, setFilterCart] = useState([]);
    const [filterfavort, setFilterFavort] = useState([]);

    const stateCart = useSelector((state) => state?.cart?.CartData);
    const productsdata = useSelector((state) => state?.product);
    const favortstate = useSelector((state) => state?.singleuser?.Singleuser);
    const usercart = useSelector((state) => state?.usercart?.UsercartData);

    const { loading, Products } = productsdata;


    useEffect(() => {

        dispatch(GetProductActions())
        dispatch(GetcartActions());
    }, [stateCart])




    useEffect(() => {
        let filterid = [];

        usercart?.map((item) => {
            filterid?.push(item?.product?._id);
        })

        setFilterCart(filterid);

    }, [])





    const AddTocart = (data, cartid) => {
        // dispatch(CartAdd(data));

        const dataresponse = {
            cartId: cartid
        }
        dispatch(AddcartActions(dataresponse))
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
                        <h4>Shopping Now</h4>
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
                                        {item?.productname?.slice(0, 25)}
                                    </div>

                                    <div className='d-flex justify-content-between mb-3 mt-2'>
                                        <div className='fw-bold d-flex gap-4'>Price  ₹ {item?.saleprice}</div>
                                        <div className='text-danger'><del> ₹ {item?.oldprice}</del></div>
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
                                    {usercart?.some((items) => items?.product?._id === item?._id) ? <div className='text-success'>Added to cart</div> : <>
                                        <div class="card__icon" onClick={() => AddTocart(item, item?._id)}><ion-icon name="cart-outline"></ion-icon></div>
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