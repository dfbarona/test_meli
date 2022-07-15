const { validationResult } = require('express-validator');

/**
 * @description Middleware for handling validations
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @return {*}
 */
const validateResults = (req, res, next) => {
	try {
		validationResult(req).throw();
		return next();
	} catch (error) {
		res.status(403);
		res.send({ errors: error.array() });
	}
};

module.exports = validateResults;
