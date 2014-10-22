"use strict";

angular.module("angular-gsframe-test", ["ui.gsframe"]).controller("index", function($scope, $timeout) {
	$scope.img = "img0.png";
	$timeout(function() {
		$scope.img = "img1.png";
	}, 1000);
});