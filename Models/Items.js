const moongoose = require('mongoose');

const itemSchema = moongoose.Schema({
    name: 'string',
    quantity: 'number',
    date: 'date'
})


module.exports.itemModal = moongoose.model('products', itemSchema);