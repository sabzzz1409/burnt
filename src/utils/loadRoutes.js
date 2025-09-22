import express from "express";
import fs from "fs";
import path from "path";
import url from "url";
import dirName from "#utils/dirName.js";

const router = express.Router();

export default async function loadRoutes(dir = path.join(dirName(import.meta.url), "..", "servers")) {
	const files = fs.readdirSync(dir);

	for (const file of files) {
		const fullPath = path.join(dir, file);
		const stat = fs.statSync(fullPath);

		if (stat.isDirectory()) {
			await loadRoutes(fullPath); // recurse
		} else if (file.endsWith(".js")) {
			// Convert Windows path -> file:// URL
			const fileUrl = url.pathToFileURL(fullPath).href;
			const route = (await import(fileUrl)).default;
			router.use(route);
		}
	}

	return router;
}
