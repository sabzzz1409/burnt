// express
import express from 'express';
// utils
import settings from "./configs/settings.js"
import loadRoutes from "#configs/loadRoutes.js";
import checkSqlDb from '#configs/checkSqlDb.js';
import checkMongoDb from '#configs/checkMongoDb.js';
import corsSettings from '#configs/corsSettings.js';
// databases
import mySqlDb1 from '#databases/mySqlDb1.js';
import mongoDb1 from '#databases/mongoDb1.js';

/////////////////////////////////////////////////////////////////////////////////////

// settings
const { port, apiUrl } = settings;

// routes
const router = await (async () =>
	process.argv.includes("manual")
		? (console.log("manual routing"), (await import('./router.js')).default)
		: (console.log("auto routing"), await loadRoutes())
)();

// checking databse connections
await checkSqlDb(mySqlDb1, "MySQLDB1");
await checkMongoDb(mongoDb1, "mongoDb1");

///////////////////////////////////////////////////////////////////////////////////

// express server setup
express()
	.use(
		express.json(),
		corsSettings,
		router
	)
	.get("/", (_, res) => { res.send("Reading!") })
	.listen(port, console.log(`${apiUrl}:${port}`));
