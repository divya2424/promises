// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
    username: {type: String},
    name: {type: String},
    email: {type: String},
    phone_number: {type: Number},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});

var DoctorSchema = new mongoose.Schema({
    username: {type: String},
    name: {type: String},
    email: {type: String},
    phone_number: {type: Number},
    designation: {type: String}

});

var PharmacistSchema = new mongoose.Schema({
    username: {type: String},
    name: {type: String},
    email: {type: String},
    phone_number: {type: Number},
    designation: {type: String}

});



// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
module.exports = mongoose.model('Doctor', DoctorSchema);
module.exports = mongoose.model('Pharmacist', PharmacistSchema);
