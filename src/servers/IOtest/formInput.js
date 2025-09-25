import express from "express";
import routeSetup from "#configs/routeSetup.js";
import mySqlDb1 from "#databases/mySqlDb1.js";
import multerUpload from "#configs/multerUpload.js";
import settings from "#configs/settings.js";

export default express.Router()
	.post(
		routeSetup(import.meta.url),
		multerUpload.fields([{ name: 'uploadFile' }]),
		async (req, res) => {
			try {
				const { body, files } = req;
				console.log(body);
				const { data } = body;
				const fData = JSON.parse(data);
				console.log(fData);
				console.log(files);
				const { uploadFile } = files;
				const [file] = uploadFile || [];
				const { filename } = file || '-';
				const { apiUrl, port } = settings
				fData["data-file"] = filename ? `${apiUrl}:${port}/${filename}` : '';
				// Extract column names and values
				const columns = Object.keys(fData).map(col => `\`${col}\``).join(", ");
				const placeholders = Object.keys(fData).map(() => `?`).join(", ");
				const values = Object.values(fData);

				const query = `INSERT INTO iotable (${columns}) VALUES (${placeholders})`;
				console.log(query)
				const [result] = await mySqlDb1.execute(query, values);

				res.status(200).json({ data: result });
			} catch (error) {
				console.error(error);
				res.status(500).json({ error: error.message });
			}
		}
	);
