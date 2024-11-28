const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/obras"));
  },
  filename: (req, file, cb) => {
    const nombreDeArchivo = `${file.originalname}`;
    cb(null, nombreDeArchivo);
  },
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("Solo se permiten archivos JPEG, JPG o PNG."));
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
