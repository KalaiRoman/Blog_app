import Cart_shema from "../../models/Cart_shema.js";
export const createCart = async (req, res, next) => {
    const { cartId } = req.body;
    try {
        let filtercartid = [];
        const existproduct = await Cart_shema.find({ userId: req.userid });
        existproduct?.map((item, index) => {
            filtercartid.push(item?.productId);
        })
        if (filtercartid.includes(cartId)) {
            res.status(404).json({ message: "Already Added in Cart" });
        }
        else {
            const response = await Cart_shema({
                cartId,
                product: cartId,
                productId: cartId,
                userId: req.userid
            });
            await response.save();
            res.status(201).json({ message: "Added to Cart" });
        }

    } catch (error) {
        res.status(404).json({ message: "Add to cart error" });

    }
}



// get cart products users

export const getCart = async (req, res, next) => {
    try {
        const response = await Cart_shema.find({ userId: req.userid }).populate("product");
        res.status(200).json({ message: "Delted to Cart", data: response });
    } catch (error) {
        res.status(404).json({ message: "get to cart error" });

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

