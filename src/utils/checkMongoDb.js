export default (db, name) => {
	db.on("connected", () => {
		console.log(name + " MongoDB connected successfully");
	});

	db.on("error", (err) => {
		console.error(name + " MongoDB connection error:", err);
	});
}
