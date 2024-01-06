import Cart_shema from "../../models/Cart_shema.js";



export const createCart = async (req, res, next) => {

    const { cartId, userid } = req.body;
    try {

        const response = await Cart_shema({
            cartId,
            userid: req.userid
        });

        await response.save();
        res.status(201).json({ message: "Added to Cart" });

    } catch (error) {
        res.status(404).json({ message: "Add to cart error" });

    }
}

// delete

export const deleteCart = async (req, res, next) => {

    const id = req.params.id;
    try {
        const response = await Cart_shema.findByIdAndDelete(id);
        res.status(200).json({ message: "Delted to Cart" });

    } catch (error) {
        res.status(404).json({ message: "Delete to cart error" });

    }
}