const { itemModal } = require("../Models/Items");

// Getting Items
module.exports.getItems = async (req, res) => {
    try {
        const data = await itemModal.find();
        res.send(data);
    } catch (err) {
        console.log(err)
    }
}

//Find Item by Id
module.exports.getItem = async (req, res) => {
    try {
        const data = await itemModal.findById(req.params.id);
        res.send(data);
    } catch (err) {
        console.log(err)
    }
}

// Add Item
module.exports.addItem = async (req, res) => {
    try {
        // const dateNow = new Date(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate());
        // const data = await new itemModal({date: dateNow, ...req.body}).save();
        const data = await new itemModal({...req.body}).save();
        res.send(data);       
    } catch (err) {
        console.log(err.message)
        res.status(404).send(err.message);
    }
}

//Edit Items
module.exports.editItem = async (req, res) => {
    // const dateNow = new Date(new Date().getFullYear(), new Date().getMonth()+1, new Date().getDate());
    try {
        let data = await itemModal.findOneAndUpdate({_id: req.params.id}, {...req.body});
        // let data = await itemModal.findById(req.params.id);
        // data = {...req.body, date: dateNow};
        data = { ...req.body};
        // data.save();
        res.json(data);
    } catch (err) {
        console.log(err.message);
        res.status(404).send(err.message);
    }
}

//Delete item
module.exports.deleteItem = async (req, res) => {
    try {
        const data = await itemModal.findById(req.params.id);
        data.remove();
        res.send('Successfully Deleted')
    } catch (err) {
        res.status(404).send(err.message);
    }
}