import mysql from "mysql2/promise";

export default mysql.createPool({
	user: "root",
	password: "",
	host: "localhost",
	database: "based"
});

