const express = require('express');
const { getItems, addItem, editItem, getItem, deleteItem } = require('../Modules/Items');
const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItem);

router.post('/add-item', addItem);

router.patch('/edit-item/:id', editItem);
// router.put('/edit-item/:id', editItem);

router.delete('/delete-item/:id', deleteItem)

module.exports = router;