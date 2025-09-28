import express
	from "express";
import dirName
	from "./dirName.js";
import path
	from "path";

const { static: _static } = express;
const { join } = path;

export default (metaUrl,folder) => {
	const direc = dirName(metaUrl);
	const uploadDirec = join(direc, "..", folder)
	return _static(uploadDirec);
}


