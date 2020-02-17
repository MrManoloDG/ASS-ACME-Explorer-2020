'use strict';

var mongoose = require('mongoose'),
    Application = mongoose.model('Applications');

//----------------------------
// /v1/applications
//----------------------------

// list all the applications
exports.list_all_applications = function(req,res){
    Application.find({},function(err, applis){
        if(err){
            res.status(500).send(err);
        } else {
            res.json(applis);
        }
    });
};

// create an applicaction
exports.create_an_application = function(req,res){
    //Check that user is a Explorer and if not: res.status(403); "an access token is valid, but requires more privileges"
    var new_appli = new Application(req.body);

    new_appli.save(function(err, appli) {
        if (err){
            if(err.name=='ValidationError') {
                res.status(422).send(err);
            }
            else{
                res.status(500).send(err);
            }
        }
        else{
            res.json(appli);
        }
    });
};

//----------------------------
// /v1/applications/:applicationId
//----------------------------

// read an application  
exports.read_an_application = function(req,res){
    Application.findById(req.params.applicationId, function(err, application){
        if(err){
            res.status(500).send(err);
        } else {
            res.json(application);
        }
    })
};

// update an application status
exports.update_an_application = function(req,res){
    //Check if the appliction has been previously assigned or not to a trip
    //Check if the trip has a manager assigned
    //Check the current status of the application
    //Update the apllication depending on the status
    Application.findById(req.params.applicationId, function(err, appli) {
        if (err){
            if(err.name=='ValidationError') {
                res.status(422).send(err);
            }
            else{
                res.status(500).send(err);
            }
        }
        else{
            Application.findOneAndUpdate({_id: req.params.applicationId}, req.body, {new: true}, function(err, appli) {
            if (err){
                res.status(500).send(err);
            }
            else{
                // do the check
                res.json(appli);
            }
            });
        }
    });
};

// delete an application. Currently an application cannot be deleted!
exports.delete_an_application = function(req,res){
    // an application cannot be deleted
    res.status(403).send("An application cannot be deleted!");
};

//----------------------------
// /v1/applications/users/:userId
//----------------------------

// list applications that explorers/manager have made
exports.list_all_my_applications = function(req, res) {
    // retieve the user id
    // check if the user is explorer or manager

    var user_id = req.params.userId;
    // TODO find by user_id
    Application.find(function(err, appis) {
      if (err){
        res.status(500).send(err);
      }
      else{
        res.json(appis);
      }
    });
};

//----------------------------
// /v1/applications/:applicationId/users/:userId
//----------------------------

// read an applicaction that explorer/manager manages
exports.read_an_application_by = function(req,res){
    // check the manager_id
    var manager_id = req.params.applicationId;
    // check the application id
    var app_id = req.params.applicationId;

    res.send('Retrieve an applicaction that explorer/manager manages');
};

// update an applicaction status that manager manages
exports.update_an_application_by = function(req,res){
    // check the manager_id
    var manager_id = req.params.applicationId;
    // check the application id
    var app_id = req.params.applicationId;

    res.send('Retrieve and update an applicaction status that explorer/manager manages');
};

//----------------------------
// /v1/applications/search
//----------------------------
exports.search_applications = function(req, res) {
    //check if explorer or manager param exists
    //Search depending on params
    //console.log('Searching applications depending on params');
    res.send('applications returned from the applications search');
};

