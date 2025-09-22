import path from "path";
import url from "url";

export default (fileUrl) => path.dirname(url.fileURLToPath(fileUrl));
