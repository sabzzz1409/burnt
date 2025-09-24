import express from "express";
import routeSetup from "#configs/routeSetup.js";
import mySqlDb1 from "#databases/mySqlDb1.js";
import sql from "sql-template-tag";

export default express.Router().post(
	routeSetup(import.meta.url),
	async (req, res) => {
		try {
			const { body } = req;
			console.log(body);

			// Extract column names and values
			const columns = Object.keys(body).map(col => `\`${col}\``).join(", ");
			const placeholders = Object.keys(body).map(() => `?`).join(", ");
			const values = Object.values(body);

			const query = sql`INSERT INTO iotable (${columns}) VALUES (${placeholders})`;
			
			const [result] = await mySqlDb1.execute(query, values);

			res.status(200).json({ data: result });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: error.message });
		}
	}
);
