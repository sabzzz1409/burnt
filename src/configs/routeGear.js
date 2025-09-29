import loadRoutes
	from '#configs/loadRoutes.js';

export default async () => {
	const manual = process.argv.includes("manual");

	if (manual) {
		console.log("manual routing");
		const { default: routing } = await import('../router.js')
		return routing
	}
	else {
		console.log("auto routing");
		return await loadRoutes()
	}

}
