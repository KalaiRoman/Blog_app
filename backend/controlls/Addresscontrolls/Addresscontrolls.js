import Address_Shema from "../../models/Address_Shema.js";

// create
export const createAddress = async (req, res, next) => {

    const {
        username,
        contactno,
        alternateno,
        street,
        city,
        pincode,
        address,
        locationtype,
    } = req.body;
    try {

        const response = await new Address_Shema({
            username,
            contactno,
            alternateno,
            street,
            city,
            pincode,
            address,
            locationtype,
            user: req.userid,
            userid: req.userid
        });
        response.save();
        res.status(201).json({ message: "Address Created" })

    } catch (error) {
        res.status(404).json({ message: "error address create", });

    }
}

// edit


export const editAddress = async (req, res, next) => {

    const id = req.params.id;
    try {

        const resposne = await Address_Shema.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({ message: "Updated Address" })

    } catch (error) {
        res.status(404).json({ message: "error address update" });

    }
}

// all adress currentuser
export const allAddress = async (req, res, next) => {
    try {
        const response = await Address_Shema.find({ userid: req.userid }).populate("user");
        res.status(200).json({ message: "success", data: response })

    } catch (error) {
        res.status(404).json({ message: "error address get", });

    }
}

// all single adress currentuser
export const singleAddress = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await Address_Shema.findById(id);
        res.status(200).json({ message: "success", data: response })

    } catch (error) {
        res.status(404).json({ message: "error address get", });

    }
}


// delete address

export const deleteAddress = async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await Address_Shema.findByIdAndDelete(id);
        res.status(200).json({ message: "Address Deleted" })
    } catch (error) {

    }
}