import multer from "multer";

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
        const directory = "./public/images/products";

        callback(null, directory);
    },
    filename: (req, file, callback) => {
        let fileName = `${req.body.productName}-${Date.now()}`;
        const ext = file.originalname.split(".").pop();
        
        fileName += `.${ext}`;

        callback(null, fileName);
    }
});

const upload = multer({ 
    storage: fileStorageEngine, 
    limits: { fieldSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, callback) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            callback(null, true);
        } else {
            callback(null, false);
        }
    }
});

export default upload;