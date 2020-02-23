'use strict'
module.exports = function(req, res){
    var applications = require('../controllers/finderController');
    
    /**
     * Get all finders.
     * 
     * Create a new finder.
     *     Required role: Explorer.
     * 
     * @section finders
     * @type get, post
     * @url /v1/finders
     */
    app.route('/v1/finders')
        .get(applications.all_finders);
    
    /**
     * Get a finder by _id.
     *     Required role: Explorer.
     * 
     * Delete a finder by _id.
     * 
     * @section finders
     * @type get, delete.
     * @url /v1/finders/:finderId
     */
    app.route('/v1/finders/:finderId')
        //.get(applications.find_a_finder)
        .delete(applications.remove_finder);
    
    /**
     * Get the actor's finder.
     *     Required role: Explorer
     * 
     * Update the finder.
     *     Required role: Explorer.
     * 
     * @section finders
     * @type get, put
     * @url /v1/finders/:actorId
     */
    app.route('/v1/finders/:actorId')
        .get(applications.finder_of_actor)
        .put(applications.update_finder);
}