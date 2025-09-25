import loadRoutes
	from '#configs/loadRoutes.js';

export default async () => {
	const { argv } = process;
	const manual = argv.includes("manual");
	const { log } = console;
	if (manual) {
		log("manual routing");
		const { default: routing } = await import('../router.js')
		return routing
	}
	else {
		log("auto routing");
		return await loadRoutes()
	}

}
