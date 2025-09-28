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
			const { log } = console;
			log(body);

			const query = `
				SELECT * FROM test1 WHERE name=?;
			`;

			const values = [
				"test A"
			];

			log(query.trim())
			log(values);

			const execute = mySqlDb1.execute.bind(mySqlDb1);

			const [result] = await execute(query, values);

			log(result);

			/#finale#/
			res.status(200).json({ data: result });
			/########/

		} catch (err) {
			const { error } = console;
			error(err)
			res.status(500).json({ error: err1 })
		}
	}
)
