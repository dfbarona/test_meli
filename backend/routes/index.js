const express = require('express')
const fs = require('fs')
const router = express.Router()

const PATH_ROUTES = __dirname;

/**
 * @description Remove the extension and configure the routes
 * @author David Barona <davidfbarona@gmail.com>
 * @date 10/07/2022
 * @param {*} filename
 * @return {*} 
 */
const removeExtension = (filename) => {
    return filename.split('.').shift()
}


fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)
    if (name != 'index') {
        router.use(`/${name}`, require(`./${file}`))
    }
});

module.exports = router