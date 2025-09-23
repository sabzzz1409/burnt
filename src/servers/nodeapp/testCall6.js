import express from "express";
import routeSetup from "#configs/routeSetup.js";
import baseModel from "#models/base.model.js";

export default express.Router()
	.get(routeSetup(import.meta.url),

		async (req, res) => {
			try {
				const {
					body,
					query
				} = req;

				console.log(body);
				console.log(query);

				const result = await baseModel.find();

				/#finale#/
				res.status(200).json({ data: result });
				/########/
			} catch (error) {
				console.error(error)
				res.status(500).json({ error })
			}
		}
	)
