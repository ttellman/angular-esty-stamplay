/**
 * Created by Tim on 1/10/2016.
 */
angular.module('etsyApp', [
    'ngStamplay',
    'ui.router',
    'app.routes',
    'app.admin',
    'app.authenticate',
    'app.checkout',
    'app.home',
    'app.product',
    'app.profile',
    'app.shop',
    'UserService'
]).controller('MainController',['User', '$rootScope',  MainController]);

/**
 *Main controller for application
 */
function MainController(User, $rootScope) {
    var main = this;
    $rootScope.currentUser = {}; //create an object to hold current user

    //get the current user and bind there data to the $rootScope.currentuser object
    User.getCurrent()
        .then(function(data) {
            if(data.get('_id')) {
                $rootScope.currentUser.id = data.get('_id');
                $rootScope.currentUser.name = data.get('displayName');
                $rootScope.currentUser.image = data.get('profileImg');
            }else {
                //clear the current user just to be sure;
                $rootScope.currentUser = {};
            }
        });

}