

// create

import Order_shema from "../../models/Order_shema.js";

export const createOrder = async (req, res, next) => {
    const {
        order, paymentMethod, addressid } = req.body;
    try {
        const response = await Order_shema({
            user: req.userid,
            address: addressid,
            order,
            paymentMethod,
            userid: req.userid,
            orderstatus: true
        })
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
        const update = await Order_shema.find({ userid: req.userid });

        console.log(update,'update')
        res.status(200).json({ message: "success", data: update })

    } catch (error) {
        res.status(404).json({ message: "Order get Error" })

    }
}

// delete

