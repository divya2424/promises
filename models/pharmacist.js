var mongoose = require('mongoose');

var PharmacistSchema = new mongoose.Schema({
    name: {type: String},
    pharmacist_id: {type: Number},
    email: {type: String},
    phone_number: {type: Number}

});


module.exports = mongoose.model('Pharmacist', PharmacistSchema);
