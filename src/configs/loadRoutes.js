import express from "express";
import fs from "fs";
import path from "path";
import url from "url";
import dirName from "#configs/dirName.js";

const router = express.Router();
let allRoutesLoaded = false; // flag to track loading status

export default async function loadRoutes(
	dir = path.join(dirName(import.meta.url), "..", "servers")
) {
	const files = fs.readdirSync(dir);

	for (const file of files) {
		const fullPath = path.join(dir, file);
		const stat = fs.statSync(fullPath);

		if (stat.isDirectory()) {
			await loadRoutes(fullPath); // recurse
		} else if (file.endsWith(".js")) {
			const fileUrl = url.pathToFileURL(fullPath).href;
			const route = (await import(fileUrl)).default;
			router.use(route);
		}
	}

	// After all recursive calls, mark routes as loaded
	allRoutesLoaded = true;

	// Status route
	router.get("/status", (req, res) => {
		if (allRoutesLoaded) {
			res.send("All routes loaded successfully!");
		} else {
			res.send("Routes pending...");
		}
	});

	return router;
}
