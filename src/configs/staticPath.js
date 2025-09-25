import express
	from "express";
import dirName
	from "./dirName.js";
import path
	from "path";

export default (metaUrl) => {
	const { static: _static } = express;
	const direc = dirName(metaUrl);
	const { join } = path;
	const uploadDirec = join(direc, "..", "uploads")
	return _static(uploadDirec);
}


