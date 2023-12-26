


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
            user: req.userid
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

        const response = await Product_Shema.findById(id);
        res.status(200).json({ message: "success", data: response });


    } catch (error) {
        res.status(404).json({ message: "get error" })

    }
}

// all products

export const getAllProduct = async (req, res, next) => {

    try {
        const response = await Product_Shema.find().populate("user");
        res.status(200).json({ message: "success", data: response });

    } catch (error) {
        res.status(404).json({ message: "get all error" })

    }
}

// edit

export const editProduct = async (req, res, next) => {
    try {

    } catch (error) {
        res.status(404).json({ message: "edit error" })

    }
}

// delete

export const deleteProduct = async (req, res, next) => {
    try {

    } catch (error) {
        res.status(404).json({ message: "delete error" })

    }
}