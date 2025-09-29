import mysql from "mysql2/promise";

const { createPool } = mysql;

export default createPool({
	host: "localhost",
	user: "root",
	password: "",
	database: "based",
	multipleStatements: false
});
