var User = require('../models/user');
var Doctor=require('../models/user');
var Pharmacist=require('../models/user');

//Details of the user
exports.postUsers = function (req, res) {
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        phone_number: req.body.phone_number,
        created_at: new Date(),
        updated_at: ""
    });

    user.save(function (err, response) {
        if(err) {
            return res.json(req, res, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};

//details of the doctor
exports.postDoctors = function (req, res) {
    var doctor = new Doctor({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        phone_number: req.body.phone_number,
        designation: req.body.designation
    });

    doctor.save(function (err, response) {
        if(err) {
            return res.json(req, res, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};

//details of the pharmacist
exports.postPharmacists = function (req, res) {
    var pharmacist = new Pharmacist({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        phone_number: req.body.phone_number,
        designation: req.body.designation
    });

    pharmacist.save(function (err, response) {
        if(err) {
            return res.json(req, res, err);
        }

        res.json({
            success: true,
            body: response
        })

    });
};

//get the users
exports.getUsers=function(req,res){
    User.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

//get the DoctorSchema
exports.getDoctors=function(req,res){
    Doctor.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

//get the pharmacist
exports.getPharmacists=function(req,res){
    Pharmacist.find({}, function(err, response){
        if(err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.updateUsers=function(req,res){
    var id = req.params.id;
    User.findOne({_id: id}, function(err, user){
        if(err){
            res.json(err);
        }

        var username = req.body.username;
        user.username = username;
        user.updated_at = new Date();

        user.save(function(err, response){
            if(err){
                res.json(err);
            }

            res.json(response);
        })
    })
}

exports.searchuser=function(req,res){
    var id = req.params.id;
    User.findOne({_id: id}, function(err, user){
        if(err){
            res.json(err);
        }

        })
      }
//deleting the users
exports.deleteUsers=function(req,res){
    var id = req.params.id;
    User.findOne({_id: id}, function(err, user){
        if(err){
            res.json(err);
        }

        if(user){
           User.remove({_id: id}, function(err){
                if(err){
                    res.json(err);
                }

                res.json("success");
            })
       }else{
            res.json("User doesnt exist");
       }

    })
}

//deleting the doctors
exports.deleteDoctors=function(req,res){
    var id = req.params.id;
    Doctor.findOne({_id: id}, function(err, doctor){
        if(err){
            res.json(err);
        }

        if(doctor){
           Doctor.remove({_id: id}, function(err){
                if(err){
                    res.json(err);
                }

                res.json("success");
            })
       }else{
            res.json("Doctor doesnt exist");
       }

    })
}

//deleting the pharmacist
exports.deletePharmacist=function(req,res){
    var id = req.params.id;
    Pharmacist.findOne({_id: id}, function(err, user){
        if(err){
            res.json(err);
        }

        if(pharmacist){
           Pharmacist.remove({_id: id}, function(err){
                if(err){
                    res.json(err);
                }

                res.json("success");
            })
       }else{
            res.json("Pharmacist doesnt exist");
       }

    })
}

//
// exports.searchregex=function(req,res){
//     var regular = req.params.reg;
//     regexpression = new RegExp(regular);
//     User.find({name:regexpression}, function(err,user){
//         if(err){
//             res.json(err);
//         }
//
//     })
// }
