export default async function (db, name) {
    try {
        await db.execute("SELECT 1");
        console.log(`${name} database connected`);
    } catch (err) {
        console.error(`${name} database connection failed:`, err.message);
    }
}
