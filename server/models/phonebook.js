const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phonebookSchema = new Schema ({
    name : String,
    phonenumber : String
})

module.exports = mongoose.model('Phonebook', phonebookSchema);