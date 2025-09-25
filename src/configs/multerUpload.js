import multer from "multer";

export default multer({
	storage: multer.diskStorage({
		destination: (req, file, cb) => cb(null, 'uploads/'),
		filename: (req, file, cb) => {
			// console.log(file)
			return cb(null, Date.now() + '-' + file.originalname + '.' + file.mimetype.split('/')[1])
		}
	})
})
