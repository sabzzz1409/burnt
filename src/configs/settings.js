import "dotenv/config";

const {
	NODE_ENV,

	DEV_PORT,
	PROD_PORT,

	DEV_APIURL,
	PROD_APIURL

} = process.env;

const isProd = NODE_ENV === "prod";

const PORT = isProd ? PROD_PORT : DEV_PORT;
const APIURL = isProd ? PROD_APIURL : DEV_APIURL;

console.log(isProd ? "Running Production" : "Running Development");

export default {
	port: PORT || 3000,
	apiUrl: APIURL || "http://localhost"
};
