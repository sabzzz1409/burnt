import express
	from "express";
import mySqlDb1
	from "#databases/mySqlDb1.js";
import routeSetup
	from "#configs/routeSetup.js";

const { Router } = express;
const router = Router();
const get = router.get.bind(router);
const { url: serverFileUrl } = import.meta;
const serverRoute = routeSetup(serverFileUrl);

export default get(
	serverRoute,

	async (req, res) => {
		try {
			const { body } = req;
			console.log(body);
			// const { piece } = body;
			const query = `
				SELECT * FROM test1 WHERE name=?;
				`;
			const values = [
				// piece
				"test A"
			]
			console.log(query.trim())
			console.log(values);
			const [result] = await mySqlDb1.query(query, values);
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
