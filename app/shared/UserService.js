/**
 * Created by Tim on 1/10/2016.
 */
angular
    .module('UserService', [])
    .factory('User', ['$stamplay', '$q', UserService]);

function UserService($stamplay, $q) {

    //return an object with all our functions
    return {
        getCurrent : getCurrent,
        signup : signup,
        login : login,
        logout : logout
    };

    //Get the current logged in user
    function getCurrent() {
        var def = $q.defer();

        //instantiate a new user model from the stamplay js sdk
        var user = $stamplay.User().Model;
        user.currentUser()
            .then(function() {
                //send the entire user model back
                def.resolve(user);
            });

        return def.promise;
    }

    //Register a user with the name, email and password
    function signup(data){
        var def = $q.defer();

        //instantiate a new user model from the stamplay js sdk
        var user = $stamplay.User().Model;
        user.signup(data)
            .then(function() {
                //send the entire user model back
                def.resolve(user);
            })
        return def.promise;
    }

    // Log a user in with their email and password

    function login(data) {
        var def = $q.defer();

        var user = $stamplay.User().Model;
        user.login(data.email, data.password)
            .then(function () {
                //send the entire user model back
                def.resolve(user);
            }, function () {
                def.reject({'error': 'Unable to login user.'});
            });
    }

        //log the current user out and return to logout url (home)

    function logout() {
        var user = $stamplay.User().Model;
        user.logout();
    }

}