import express from "express";
import mySqlDb1 from "#databases/mySqlDb1.js";
import routeSetup from "#utils/routeSetup.js";

export default express.Router()
	.get(routeSetup(import.meta.url),

		async (req, res) => {
			try {
				const { body } = req;
				console.log(body);
				const { piece } = body;
				const query = `
				SELECT * FROM test1 WHERE name=?;
				`;
				const values = [piece]
				console.log(query.trim())
				console.log(values);
				const [[result]] = await mySqlDb1.execute(query, values);
				console.log(result);

				/#finale#/
				res.status(200).json({ data: result });
				/########/
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
			}
		}
	)
