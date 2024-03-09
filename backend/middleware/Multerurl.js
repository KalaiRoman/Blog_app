import multer from "multer";
import path from "path";

// Define storage settings for multer
const storage = multer.diskStorage({
    // destination: function (req, file, cb) {
    //     // Define the destination directory for uploaded files
    //     cb(null, './image');
    // },
    filename: function (req, file, cb) {
        // Define how the filename should be saved
        cb(null, file.originalname);
    }
});

// Create the multer instance with the defined storage settings
const upload = multer({ storage: storage });

// Export the configured multer instance
export default upload;
