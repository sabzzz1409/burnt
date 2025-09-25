import url
	from "url";

const { fileURLToPath } = url;

export default (fileUrl) => fileURLToPath(fileUrl);
