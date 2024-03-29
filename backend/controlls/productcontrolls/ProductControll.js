


// create

import Product_Shema from "../../models/Product_Shema.js";

export const CreateProduct = async (req, res, next) => {

    const {
        productname,
        oldprice,
        saleprice,
        discount,
        quantity,
        description,
        thumbimage,
        imagestore,
        color,
        size,
        userquantity
    } = req.body;
    try {

        const response = new Product_Shema({
            productname,
            oldprice,
            saleprice,
            discount,
            quantity,
            description,
            thumbimage,
            imagestore,
            color,
            size,
            userid: req.userid,
            user: req.userid,
            userquantity: 1
        })

        response.save();
        res.status(201).json({ message: "Create Product" })

    } catch (error) {
        res.status(404).json({ message: "create error" })

    }
}

// get single product

export const getProduct = async (req, res, next) => {

    const id = req.params.id;
    try {

        const response = await Product_Shema.findById(id).populate("user");
        res.status(200).json({ message: "success", data: response });


    } catch (error) {
        res.status(404).json({ message: "get error" })

    }
}

// all products

export const getAllProduct = async (req, res, next) => {

    const { page, size } = req.query;

    // if (!page) {
    //     page = 1
    // }

    // if (!size) {
    //     size = 10
    // }

    // const limit = parseInt(size);

    // const skip = (page || 1 - 1) * size;

    try {
        const response = await Product_Shema.find({}).populate("user").sort({ createdAt: -1 })
        // .limit(limit).skip(skip);
        res.status(200).json({ message: "success", data: response });

    } catch (error) {
        res.status(404).json({ message: "get all error" })

    }
}

// current user products

export const getCurrentuserProducts = async (req, res, next) => {

    const { page, size } = req.query;

    // if (!page) {
    //     page = 1
    // }

    // if (!size) {
    //     size = 10
    // }

    // const limit = parseInt(size);

    // const skip = (page || 1 - 1) * size;
    try {
        const response = await Product_Shema.find({ userid: req.userid }).populate("user")
        // .limit(limit).skip(skip);
        res.status(200).json({ message: "success", data: response });

    } catch (error) {
        res.status(404).json({ message: "get all error" })

    }
}

// edit

export const editProduct = async (req, res, next) => {

    const id = req.params.id
    try {

        const update = await Product_Shema.findByIdAndUpdate(id, req.body, { new: true })

        res.status(200).json({ message: "Product Updated" })

    } catch (error) {
        res.status(404).json({ message: "edit error" })

    }
}

// delete

export const deleteProduct = async (req, res, next) => {
    const id = req.params.id
    try {
        const update = await Product_Shema.findByIdAndDelete(id)
        res.status(200).json({ message: "Product Deleted" })

    } catch (error) {
        res.status(404).json({ message: "delete error" })

    }
}