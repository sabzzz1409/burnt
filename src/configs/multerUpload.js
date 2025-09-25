import multer
	from "multer";

const { diskStorage } = multer;

export default multer({
	storage: diskStorage({
		destination: (req, file, cb) => cb(null, 'uploads/'),
		filename: (req, file, cb) => {
			// console.log(file)
			const {
				originalname,
				mimetype
			} = file;

			return cb(null, Date.now() + '-' + originalname + '.' + mimetype.split('/')[1])
		}
	})
})
