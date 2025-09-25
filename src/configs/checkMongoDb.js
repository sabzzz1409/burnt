export default async (db, name) => {

	const {
		log,
		error
	} = console;

	const { readyState } = db;

	const once = db.once.bind(db);
	const on = db.on.bind(db);

	// Check current state
	switch (readyState) {
		case 0:
			log(name + " MongoDB is disconnected");
			break;
		case 1:
			log(name + " MongoDB is already connected");
			return; // already connected, no need to wait
		case 2:
			log(name + " MongoDB is connecting...");
			break;
		case 3:
			log(name + " MongoDB is disconnecting...");
			break;
		default:
			log(name + " MongoDB unknown state:", readyState);
	}

	// Wait for connection if not connected
	if (readyState !== 1) {
		try {
			await new Promise((resolve, reject) => {

				once(
					"connected",
					resolve
				);

				once(
					"error",
					reject
				);

			});

			log(name + " MongoDB connected successfully");

		} catch (err) {
			error(name + " MongoDB connection error:", err);
			throw err; // propagate error
		}
	}

	// Attach ongoing listeners
	on("error", (err) => {
		error(name + " MongoDB connection error:", err);
	});
};
