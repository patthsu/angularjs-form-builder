'use strict';

var ViewCtrl = angularApp.controller('ViewCtrl', function ($scope, FormService, $routeParams) {
    $scope.form = {};
	// read form with given id
	FormService.form(2).then(function(form) {
		$scope.form = form;
	});
});
