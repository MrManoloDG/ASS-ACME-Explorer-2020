'use strict';
module.exports = function(app) {
  var actors = require('../controllers/actorController');
  var authController=require('../controllers/authController');

  app.route('/v1/actors')
    //create an actor as an explorer or  as a manager (it must do it an admin)
    .post(actors.create_an_actor);
    
  app.route('/v1/actors/:actorId')
    //Retrieve an actor 
    .get(actors.read_an_actor)
    //edit the personal data of the actor
    .put(authController.verifyUser(["EXPLORER","MANAGER", "ADMINISTRATOR",
    "SPONSORSHIP"]),actors.update_an_actor)
    .delete(actors.delete_an_actor);

  app.route('/v1/actors/:actorId/validated')
    //ban or unban an actor 
    .put(actors.modify_actor_validation);
};