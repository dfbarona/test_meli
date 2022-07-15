const express = require('express');
const { getItems, getItem } = require('../controllers/items');
const { validatorGetItem } = require('../validators/items');
const router = express.Router();

// http://localhost:3001/api/v1/items
router.get('/', getItems);
router.get('/:id', validatorGetItem, getItem);

module.exports = router;
