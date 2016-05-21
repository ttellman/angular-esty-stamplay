/**
 * Created by Tim on 1/10/2016.
 */
// product.js
angular
    .module('app.product', [])
    .controller('ProductController', ['Product', '$stateParams', ProductController]);

function ProductController(Product, $stateParams) {
    var product = this;

    Product.get($stateParams.id)
        .then(function(data) {
            product.listing = data.instance;
        });
}