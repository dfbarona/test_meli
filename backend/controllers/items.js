const handleHttpError = require('../utils/handleHttpError')
const handleRequest = require('../utils/handleRequest')

/**
 * @description Returns the requested items
 * @author David Barona <davidfbarona@gmail.com>
 * @date 10/07/2022
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const { query } = req

    const { results } = await handleRequest('/sites/MLA/search', 'GET', query)

    const items = results.slice(0, 4).map(data => {
      return {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price
        },
        picture: data.thumbnail,
        condition: data.condition,
        state_name: data.address.state_name,
        free_shipping: data.shipping.free_shipping
      }
    })

    res.send(items)

  } catch (error) {
    handleHttpError(res, "Error obteniendo el listado de items")
  }
}


/**
 * @description Returns a single element based on ID
 * @author David Barona <davidfbarona@gmail.com>
 * @date 10/07/2022
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {

    const { id } = req.params

    const infoItem = await handleRequest(`/items/${id}`, 'GET')
    const infoItemDescription = await handleRequest(`/items/${id}/description`, 'GET')

    res.send(infoItem)

  } catch (error) {
    handleHttpError(res, "Error obteniendo la información del Item")
  }
}

module.exports = { getItems, getItem }