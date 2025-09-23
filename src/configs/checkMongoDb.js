export default async (db, name) => {
	// Check initial ready state
	switch (db.readyState) {
		case 0:
			console.log(name + " MongoDB is disconnected");
			break;
		case 1:
			console.log(name + " MongoDB is already connected");
			break;
		case 2:
			console.log(name + " MongoDB is connecting...");
			break;
		case 3:
			console.log(name + " MongoDB is disconnecting...");
			break;
		default:
			console.log(name + " MongoDB unknown state:", db.readyState);
	}

	// Event listeners
	db.on("connected", () => {
		console.log(name + " MongoDB connected successfully");
	});

	db.on("error", (err) => {
		console.error(name + " MongoDB connection error:", err);
	});
};
