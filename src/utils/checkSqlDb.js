export default async function (db, name) {
    try {
        const connection = await db.getConnection();
        await connection.query("SELECT 1");
        console.log(`${name} database connected ✅`);
        connection.release();
    } catch (err) {
        console.error(`${name} database connection failed ❌:`, err.message);
    }
}
