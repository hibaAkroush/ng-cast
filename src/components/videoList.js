angular.module('video-player')
.component('videoList', {
	controller:function ($window) {
		this.videos=window.exampleVideoData
	},
templateUrl: "src/templates/videoList.html"
});
