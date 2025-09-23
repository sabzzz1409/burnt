import express from 'express';
import settings from "./settings.js"
import loadRoutes from "#utils/loadRoutes.js";
import corsSettings from '#utils/corsSettings.js';
import mySqlDb1 from '#databases/mySqlDb1.js';
import mongoDb1 from '#databases/MongoDb1.js';
import checkSqlDb from '#utils/checkSqlDb.js';
import checkMongoDb from '#utils/checkMongoDb.js';

const { port, apiUrl } = settings
const router = await loadRoutes();

// checkSqlDb(mySqlDb1, "MySQLDB1");
// checkMongoDb(mongoDb1, "mongoDb1");

express()
	.use(
		express.json(),
		corsSettings,
		router
	)
	.get("/", (_req, res) => { res.send("Reading!") })
	.listen(port, () => { console.log(`${apiUrl}:${port}`) });
