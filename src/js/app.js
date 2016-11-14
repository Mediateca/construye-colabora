/* global angular */
var app = angular.module('app', [
    'ngTouch',
    'ngDragDrop'
]);
app.controller('main',[function(){
    console.log('main');
    var main = this;
    main.container = "views/container.html";
}]);