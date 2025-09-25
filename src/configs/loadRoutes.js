import express
	from "express";
import fs
	from "fs";
import path
	from "path";
import url
	from "url";
import dirName
	from "#configs/dirName.js";

const { Router } = express;
const router = Router();
const use = router.use.bind(router);
const get = router.get.bind(router);

const { join } = path;
const { url: baseUrl } = import.meta;
const baseDirec = dirName(baseUrl);
const serversPath = join(baseDirec, "..", "servers")
const {
	readdirSync,
	statSync
} = fs;
const { pathToFileURL } = url;

let allRoutesLoaded = false; // flag to track loading status

export default async function loadRoutes(
	dir = serversPath
) {
	const files = readdirSync(dir);

	for (const file of files) {
		const fullPath = join(dir, file);
		const stat = statSync(fullPath);
		const isDirec = stat.isDirectory();
		const isitjsfile = file.endsWith(".js");
		if (isDirec) {
			await loadRoutes(fullPath); // recurse
		} else if (isitjsfile) {
			const { href: fileUrl } = pathToFileURL(fullPath);
			const { default: route } = await import(fileUrl);
			use(route);
		}
	}

	// After all recursive calls, mark routes as loaded
	allRoutesLoaded = true;

	// Status route
	get("/status", (_req, res) => {
		if (allRoutesLoaded) {
			res.send("All routes loaded successfully!");
		} else {
			res.send("Routes pending...");
		}
	});

	return router;
}
