/**
 * Created by Tim on 1/10/2016.
 */
// authenticate.js
angular
    .module('app.authenticate', [])
    .controller('AuthenticateController', ['User', '$rootScope', '$state', AuthenticateController]);

function AuthenticateController(User, $rootScope, $state) {
    var authenticate = this;

    //create the objects for our forms
    authenticate.signupData = {};
    authenticate.loginData = {};

    //bind the functions to controller
    authenticate.signup = signup;
    authenticate.login = login;

    //Sign a user up and bind model to $rootScope
    function signup() {
        User.signup(authenticate.signupData)
            .then(function (data) {
                if (data) {
                    $rootScope.currentUser.id = data.get('_id');
                    $rootScope.currentUser.name = data.get('displayName');
                    $rootScope.currentUser.image = data.get('profileImg');

                    //redirect the user to ('home')
                    $state.go('home');
                }
            });
    }
    /*
    * Use the user factory to log a user in
    * bind the users information to $rootscope
    */
    function login() {
        User.login(authenticate.loginData)
            .then(function(data) {
                if (data.get('_id')) {
                    $rootScope.currentUser.id = data.get('_id');
                    $rootScope.currentUser.name = data.get('displayName');
                    $rootScope.currentUser.image = data.get('profileImg');

                    //redirect the user to ('home')
                    $state.go('home');
                }
            });
    }
}