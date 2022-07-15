const handleHttpError = require('../utils/handleHttpError');
const handleRequest = require('../utils/handleRequest');

/**
 * @description Returns the requested items
 * @author David Barona <davidfbarona@gmail.com>
 * @date 10/07/2022
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
	try {
		const { query } = req;
		const data = await handleRequest('/sites/MLA/search', 'GET', query);

		const categories = data.filters
			.filter((filter) => {
				return filter.id === 'category';
			})[0]
			?.values[0]?.path_from_root.map((category) => {
				return category.name;
			});

		const items = data.results.map((item) => {
			return mapItem(item);
		});

		res.send({
			categories: categories === undefined ? [] : categories,
			items: items,
		});
	} catch (error) {
		handleHttpError(res, 'Error obteniendo el listado de items');
	}
};

/**
 * @description Returns a single element based on ID
 * @author David Barona <davidfbarona@gmail.com>
 * @date 10/07/2022
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
	try {
		const { id } = req.params;

		const item = await handleRequest(`/items/${id}`, 'GET');
		const description = await handleRequest(`/items/${id}/description`, 'GET');

		const infoItem = mapItem(item, description);

		res.send(infoItem);
	} catch (error) {
		handleHttpError(res, 'Error obteniendo la información del Item');
	}
};

/**
 * @description Mapea el request de Items
 * @author David Barona <davidfbarona@gmail.com>
 * @date 13/07/2022
 * @param {*} item
 * @param {*} [description={}]
 * @return {*}
 */
const mapItem = (item, description = {}) => {
	return {
		id: item.id,
		title: item.title,
		price: {
			currency: item.currency_id,
			amount: item.price,
		},
		picture: item.thumbnail,
		picture_id: item.thumbnail_id,
		condition: item.condition,
		state_name: item.address?.state_name,
		free_shipping: item.shipping.free_shipping,
		sold_quantity: item.sold_quantity,
		description: description.plain_text,
	};
};

module.exports = { getItems, getItem };
