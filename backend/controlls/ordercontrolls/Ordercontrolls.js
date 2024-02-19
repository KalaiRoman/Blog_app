

// create

import Cart_shema from "../../models/Cart_shema.js";
import Order_shema from "../../models/Order_shema.js";
import Product_Shema from "../../models/Product_Shema.js";

// import Razorpay from 'razorpay';


// const razerPayInstance = new Razorpay({
//     key_id: 'rzp_test_mXFT95pK95u8Rm',
//     key_secret: 'Iw5mR7eG6owK7bGjyrVEtydo',
// })

export const createOrder = async (req, res, next) => {
    const {
        order, paymentMethod, addressid } = req.body;
    try {

        const olduserCart = await Cart_shema.deleteMany({ userId: req.userid });
        // const upadteQuantity = await Product_Shema.updateMany({ userid: req.userid }, { $set: { quantity: -1 } });

        const orderids = [];
        order?.map((item) => {
            orderids.push(item?.product?._id);
        })
        const currentuser = await Product_Shema.findById({ _id: orderids.toString() });
        const updatequantity = Number(currentuser?.quantity - 1);
        const upadtes = orderids?.length > 1 ? await Product_Shema.updateMany({ _id: orderids.toString() }, { quantity: `${updatequantity}` }, { new: true }) : await Product_Shema.findByIdAndUpdate({ _id: orderids.toString() }, { quantity: `${updatequantity}` }, { new: true });
        const response = await Order_shema({
            user: req.userid,
            address: addressid,
            order,
            paymentMethod,
            userid: req.userid,
            orderstatus: true
        })

        // const options = {
        //     amount: "200",
        //     currency: "INR",
        //     receipt: "kalaimca685@gmail.com"
        // };

        // razerPayInstance.orders.create(options, (err, order) => {
        //     if (err) {
        //         // Handle error
        //         console.error("Error creating order:", err);
        //         res.status(500).send({ success: false, mes: "order failed" });
        //     } else {
        //         // Order created successfully
        //         res.status(200).send({
        //             success: true,
        //             mes: "order success",
        //             amount: "200",
        //             order_id: order.id,
        //             name: "kalai",
        //             description: "Paying For Course",
        //             image: "logo",
        //             email: "kalaimca685@gmail.com",
        //             key_id: 'Iw5mR7eG6owK7bGjyrVEtydo'
        //         });
        //     }
        // });

        await response.save();
        res.status(201).json({ message: "Order Created" })
    } catch (error) {
        res.status(404).json({ message: "Order Error" })
    }
}

// update order


export const updateorder = async (req, res, next) => {
    const id = req.params.id;
    try {
        const update = await Order_shema.findByIdAndUpdate(id, { orderstatus: false }, { new: true });
        res.status(200).json({ message: "Order Updated" })

    } catch (error) {
        res.status(404).json({ message: "Order update Error" })

    }
}



// all orders

export const allorder = async (req, res, next) => {
    try {
        // front show only order details 
        const update = await Order_shema.find({ userid: req.userid }, { order: true, orderstatus: true });
        res.status(200).json({ message: "success", data: update });

    } catch (error) {
        res.status(404).json({ message: "Order get Error" })

    }
}

// delete

