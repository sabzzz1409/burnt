import path from "path";
import fileName from "#configs/fileName.js"

export default (metaUrl) => {

	const serverRoot = "src/servers";
	const projectRoot = process.cwd();

	// Relative path from project root
	const relativePath = path.relative(projectRoot, fileName(metaUrl)).replace(/\\/g, "/");

	// Strip extension
	const noExt = relativePath.replace(/\.[^/.]+$/, "");

	// Cut off everything before serverRoot
	const idx = noExt.indexOf(serverRoot);
	if (idx === -1) throw new Error(`"${serverRoot}" not found in path: ${noExt}`);
	const pathFromServer = noExt.slice(idx + serverRoot.length + 1);

	// Split into parts
	const parts = pathFromServer.split("/");

	// Process filename separately (convert dots to route params)
	const fileNamePart = parts.pop(); // last element = filename
	const fileSegments = fileNamePart.split(".");
	const fileRoute =
		fileSegments[0] +
		fileSegments.slice(1).map(seg => `/:${seg}`).join("");

	// Recombine
	return "/" + [...parts, fileRoute].join("/");
}
