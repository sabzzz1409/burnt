import express from 'express';
import settings from "./settings.js"
import loadRoutes from "#utils/loadRoutes.js";
import corsSettings from '#utils/corsSettings.js';

const { port, apiUrl } = settings
const router = await loadRoutes();

express()
	.use(
		express.json(),
		corsSettings,
		router
	)
	.get("/", (_req, res) => { res.send("Reading!") })
	.listen(port, () => { console.log(`${apiUrl}:${port}`) });
