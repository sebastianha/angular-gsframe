"use strict";

angular.module("angular-gsframe-test", ["ui.gsframe"]).controller("index", function($scope, $timeout) {
	$scope.img = "img0.png";
	$scope.img2 = "img0.png";
	$timeout(function() {
		$scope.img = "img1.png";
		$scope.img2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAABkCAIAAADCEmNlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3goVCDQQYRna2AAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAm0lEQVR42u3QMQEAMAgDsDL/nkEC17gSCakOSX9veJJviBYtGtGiRSsQLRrRokUjWjSiRYtGtGhEixaNaNGIFi0a0aIRLVo0okUjWrRoRItGtGjRiBaNaNGiES0a0aJFI1o0okWLRrRoRIsWjWjRiBYtGtGiES1aNKJFI1q0aESLRrRo0YgWjWjRohEtGtGiRSNaNKJFi0a0aDYDFW0DxRE0+u0AAAAASUVORK5CYII=";
	}, 1000);
});