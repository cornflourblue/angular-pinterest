if (window.location.href.indexOf('http') != 0) {
    alert("This demo must be run on a web server (i.e. the url must start with http/https), it won't work by opening the file directly in a browser.");
}

angular
    .module('myApp', ['angular-pinterest'])
    .controller('myController', myController);

myController.$inject = [];
function myController() {
    var vm = this;

    vm.url = 'https://www.pointblankdevelopment.com.au/blog/AngularJS-directives-for-Pinterest-buttons-and-widgets';
    vm.description = 'AngularJS Pinterest Directives - Point Blank Development';
    vm.media = 'https://www.pointblankdevelopment.com.au/images/social_media.jpg';
}
