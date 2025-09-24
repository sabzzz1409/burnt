export default async (db, name) => {
  // Check current state
  switch (db.readyState) {
    case 0:
      console.log(name + " MongoDB is disconnected");
      break;
    case 1:
      console.log(name + " MongoDB is already connected");
      return; // already connected, no need to wait
    case 2:
      console.log(name + " MongoDB is connecting...");
      break;
    case 3:
      console.log(name + " MongoDB is disconnecting...");
      break;
    default:
      console.log(name + " MongoDB unknown state:", db.readyState);
  }

  // Wait for connection if not connected
  if (db.readyState !== 1) {
    try {
      await new Promise((resolve, reject) => {
        db.once("connected", resolve);
        db.once("error", reject);
      });
      console.log(name + " MongoDB connected successfully");
    } catch (err) {
      console.error(name + " MongoDB connection error:", err);
      throw err; // propagate error
    }
  }

  // Attach ongoing listeners
  db.on("error", (err) => {
    console.error(name + " MongoDB connection error:", err);
  });
};
