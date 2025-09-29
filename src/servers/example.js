import express
	from "express";
import routeSetup
	from "#configs/routeSetup.js";
import testCall6Middleware
	from "#middlewares/testCall6.middleware.js";
import checking
	from "#scripts/checking.js"
import mySqlDb1
	from "#databases/mySqlDb1.js";

// servers
export default express.Router().delete(
	// middlewares,configs,validators
	routeSetup(import.meta.url),
	testCall6Middleware,
	async (req, res) => {
		try {

			const { body } = req;
			console.log(body);

			const [query1, values1] = [
				'SELECT * FROM test1 WHERE id=?',
				[1]
			];
			// scripts,customs
			checking('ok here');
			console.log(query1, '\nvalues1\n:', values1);

			// repositories
			// databases,models,schemas
			const [result] = await mySqlDb1.execute(query1, values1);

			console.log(result)

			// finale
			res.status(200).json(result)
			//
		}
		catch (error) {
			console.log(error);
			res.status(500).json(error);
		}
	}
)
