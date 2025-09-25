import expressValidtors
	from 'express-validator';

const {
	body,
	header,
	cookie,
	param,
	query,
	validationResult
} = expressValidtors;

export default (rules) => {
	return async (req, res, next) => {
		const locationMap = { body, header, cookie, param, query };
		const validators = [];

		for (const [location, fields] of Object.entries(rules)) {
			const picker = locationMap[location];
			if (!picker) continue;

			for (const [field, { regex, message }] of Object.entries(fields)) {
				if (!(regex instanceof RegExp)) {
					throw new Error(`Invalid regex for ${location}.${field}`);
				}
				validators.push(picker(field).matches(regex).withMessage(message));
			}
		}

		await Promise.all(validators.map(v => v.run(req)));

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		next();
	};
};

