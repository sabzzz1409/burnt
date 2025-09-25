// express
import express
	from 'express';
// utils
import settings
	from "#configs/settings.js"
import routeGear
	from '#configs/routeGear.js';
import parseJson
	from '#configs/parseJson.js';
import checkSqlDb
	from '#configs/checkSqlDb.js';
import checkMongoDb
	from '#configs/checkMongoDb.js';
import corsSettings
	from '#configs/corsSettings.js';
import staticPath
	from '#configs/staticPath.js';
// databases
import mySqlDb1
	from '#databases/mySqlDb1.js';
import mongoDb1
	from '#databases/mongoDb1.js';

/////////////////////////////////////////////////////////////////////////////////////

// settings
const {
	port,
	apiUrl
} = settings;

const { url: appUrl } = import.meta;
const { log } = console;

const app = express();

const use = app.use.bind(app);
const get = app.get.bind(app);
const listen = app.listen.bind(app);

const router = await routeGear();

// checking databse connections

await checkSqlDb(
	mySqlDb1,
	"MySQLDB1"
);

await checkMongoDb(
	mongoDb1,
	"mongoDb1"
);

///////////////////////////////////////////////////////////////////////////////////

// express server setup

use(
	parseJson,
	corsSettings,
	router,
	staticPath(appUrl)
);

get(
	"/",
	(_, res) => {
		res.send("Reading!")
	}
);

listen(
	port,
	log(`${apiUrl}:${port}`)
);
