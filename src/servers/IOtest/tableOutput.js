import express from "express";
// import mySqlDb1 from "#databases/mySqlDb1.js";
import routeSetup from "#configs/routeSetup.js";
import sql from "sql-template-tag";
import mySqlDb1 from "#databases/mySqlDb1.js";

export default express.Router()
	.get(routeSetup(import.meta.url),

		async (req, res) => {
			try {
				const { body } = req;
				console.log(body);

				const query1 = sql`
				SELECT * FROM iotable WHERE iotable_d_in=0;
				`;

				const [result] = await mySqlDb1.execute(query1);

				/#finale#/
				res.status(200).json({ data: result });
				/########/
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
			}
		}
	)
