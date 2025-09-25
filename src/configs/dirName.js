import path
	from "path";
import url
	from "url";

const { dirname } = path;
const { fileURLToPath } = url;

export default (fileUrl) => {
	const filePath = fileURLToPath(fileUrl);
	const fileDir = dirname(filePath);
	return fileDir;
}
