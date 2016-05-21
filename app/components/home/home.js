/**
 * Created by Tim on 1/10/2016.
 */
// home.js
angular
    .module('app.home', [])
    .controller('HomeController', ['Product', HomeController]);

function HomeController(Product) {
    var home = this;

    //get all products here
    Product.all()
        .then(function (data) {
            home.products = data.instance;
        });
}