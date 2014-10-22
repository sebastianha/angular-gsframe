"use strict";

angular.module("ui.gsframe", []).directive("gsframe", function() {
	return {
		scope: {
			src     : "@",
			frameSrc: "@",
			height  : "@",
			width   : "@",
			size    : "@",
			position: "@",
			repeat  : "@"
		},
		restrict: "E",
		replace : "true",
		template: "" +
			"<div ng-style=\"imgStyle\">" + 
				"<img ng-style=\"frameStyle\" ng-src=\"{{frameSrc}}\">" + 
			"</div>",
		link: function(scope, elem, attrs, modelCtrl) {
			scope.imgStyle = {
				"background-image"   : "url(" + scope.src + ")",
				"height"             : scope.height,
				"width"              : scope.width,
				"background-size"    : scope.size,
				"background-position": scope.position,
				"background-repeat"  : scope.repeat
			};
			
			scope.frameStyle = {
				"height": scope.height,
				"width" : scope.width
			};
			
			scope.$watch("src", function () {
				scope.imgStyle["background-image"] = "url(" + scope.src + ")";
			});
		}
	};
});
