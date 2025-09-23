import express from "express";
import mySqlDb1 from "#databases/mySqlDb1.js";
import routeSetup from "#configs/routeSetup.js";


export default express.Router()
	.get(routeSetup(import.meta.url),

		async (req, res) => {
			try {
				const { body, params } = req;
				console.log(body);
				// const { piece } = body;
				const { id } = params;
				console.log(id);
				const query = `
				SELECT * FROM test1 WHERE test1_id=?;
				`;
				const values = [id]
				console.log(
					query.trim(),
					// piece
				);
				const [result] = await mySqlDb1.execute(query, values);
				console.log(result);
				res.status(200).json({ data: result });
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
			}
		}
	)
