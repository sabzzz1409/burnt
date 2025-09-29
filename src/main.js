// express
import express
	from 'express';
// configurations
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
import basicGetCall
	from '#configs/basicGetCall.js';
import parseURLEncoded
	from '#configs/parseURLEncoded.js';
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

const app = express();
const appUrl = import.meta.url;

const router = await routeGear();

// checking databse connections

await checkSqlDb(
	mySqlDb1,
	"mySqlDb1"
);

await checkMongoDb(
	mongoDb1,
	"mongoDb1"
);

///////////////////////////////////////////////////////////////////////////////////

// // express server setup

// global middleware
app.use(
	parseJson,
	parseURLEncoded,
	corsSettings,
	router,
	staticPath(appUrl, "uploads"),
	basicGetCall
);

// setting server
const server = app.listen(
	port,
	console.log(`${apiUrl}:${port}`)
);

