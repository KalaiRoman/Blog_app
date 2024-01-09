

// create

import Auth_Shema from "../../models/Auth_Shema.js";
import Favorts_shema from "../../models/Favorts_shema.js";




export const createfavorts = async (req, res, next) => {
    const { productId } = req.body;
    try {
        const response = await Auth_Shema.findById(req.userid);
        const user = response?.wishlist?.find((item) => item.toString() == productId);

        if (user) {
            await Auth_Shema.findByIdAndUpdate(req.userid, {
                $pull: { wishlist: productId }
            })

            res.status(200).json({ message: "Remove product" })
        }
        else {
            await Auth_Shema.findByIdAndUpdate(req.userid, {
                $push: { wishlist: productId }
            })
            res.status(200).json({ message: "Added Products " })

        }
    } catch (error) {
        res.status(404).json({ message: "something Error favorts create" })

    }
}

export const Allfavorts = async (req, res, next) => {
    try {
        const response = await Favorts_shema.find().populate("user");
        res.status(200).json({ message: "success", data: response })
    } catch (error) {
        res.status(404).json({ message: "something Error favorts create" })

    }
}

export const deletefavorts = async (req, res, next) => {
    const id = req.params.id;
    try {
        await Favorts_shema.findByIdAndDelete(id);
        res.status(200).json({ message: "Remove Favorts" })
    } catch (error) {
        res.status(404).json({ message: "something Error favorts create" })

    }
}