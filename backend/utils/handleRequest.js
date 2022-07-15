const axios = require('axios');

/**
 * @description Consume API services
 * @author David Barona <davidfbarona@gmail.com>
 * @date 12/07/2022
 * @param {*} path
 * @param {string} [method='GET']
 * @param {*} [params={}]
 * @return {*}
 */
const handleRequest = async (path, method = 'GET', params = {}) => {
	const { data } = await axios({
		method: method,
		url: process.env.API_URL + path,
		params: params,
	});
	return data;
};

module.exports = handleRequest;
