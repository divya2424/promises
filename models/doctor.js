var mongoose = require('mongoose');

var DoctorSchema = new mongoose.Schema({
    name: {type: String},
    id: {type: Number},
    email: {type: String},
    phone_number: {type: Number}

});

module.exports = mongoose.model('Doctor', DoctorSchema);
