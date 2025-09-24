import express from "express";
import routeSetup from "#configs/routeSetup.js";
import baseModel from "#models/base.model.js";
import testCall6Middleware from "#middlewares/testCall6.middleware.js";
import checking from "#scripts/checking.js";
import validate from "#configs/validate.js";
import testCall6Validators from "#validators/testCall6.validators.js";

export default express.Router()
	// verb
	.get(
		// server route
		routeSetup(import.meta.url),
		// Validators
		validate(testCall6Validators),
		// middlewares
		testCall6Middleware,
		async (req, res) => {
			try {
				const {
					body,
					query
				} = req;

				console.log(body, 'nodeapp');
				console.log(query);
				// scripts
				checking(5);
				
				// repository
				// // database model schema 
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
