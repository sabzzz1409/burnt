export default async function (db, name) {
	try {
		const { log } = console;
		const execute = db.execute.bind(db);
		await execute("SELECT 1");
		log(`${name} database connected`);
	} catch (err) {
		const { error } = console;
		const { message } = err;
		error(`${name} database connection failed:`, message);
	}
}
