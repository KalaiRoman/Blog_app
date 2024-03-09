import { v2 as cloudinary } from 'cloudinary';
import Imageupload from '../../models/Imageupload.js';

export const ImageCreate = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        cloudinary.uploader.upload(req.file.path, async (error, response) => {
            if (error) {
                return res.status(500).json({ message: 'Error uploading image to Cloudinary', error: error.message });
            }
            try {
                const createimage = await new Imageupload({
                    avatar: response.secure_url,
                    cloud_id: response.public_id
                });
                await createimage.save();
                res.status(201).json({ message: "Image uploaded successfully", response });
            } catch (err) {
                res.status(500).json({ message: 'Error saving image to database', error: err.message });
            }
        });

    } catch (error) {
        res.status(500).json({ message: 'Error uploading image to Cloudinary', error: error.message });
    }
};
