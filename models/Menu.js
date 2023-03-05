const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let menuSchema = new Schema({
    menu_name: {
        type: String
    },
    price: {
        type: String
    },
    detail: {
        type: String
    },
},

{
    collection: "menu"
});

module.exports = mongoose.model('Menu', menuSchema);