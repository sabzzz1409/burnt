import "dotenv/config";

const { log } = console;
const { env } = process;
const {
	NODE_ENV,

	DEV_PORT,
	PROD_PORT,

	DEV_APIURL,
	PROD_APIURL

} = env;

const isProd = NODE_ENV === "prod";

const PORT = isProd ? PROD_PORT : DEV_PORT;
const APIURL = isProd ? PROD_APIURL : DEV_APIURL;

log(isProd ? "Running Production" : "Running Development");

export default {
	port: PORT || 3000,
	apiUrl: APIURL || "http://localhost"
};
