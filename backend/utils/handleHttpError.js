/**
 * @description Handle HTTP error messages
 * @author David Barona <davidfbarona@gmail.com>
 * @date 10/07/2022
 * @param {*} res
 * @param {string} [message="Something happened"]
 * @param {number} [code=403]
 */
const handleHttpError = (res, message = "Something happened", code = 403) => {
    res.status(code)
    res.send({ error: message })
}

module.exports = handleHttpError