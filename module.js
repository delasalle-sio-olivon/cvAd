var app = angular.module('appMod', ["ngAnimate","ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
		.when('/',{templateUrl : './view/home.html'})
		.when('/:cat',{templateUrl : './view/home.html'})
		.when('/doc/:docname',{templateUrl : './view/home.html'})
		.otherwise({redirectTo : '/'})
	
});

app.directive('cacher',function(){
	return {
		restrict : 'C',
	    templateUrl: function(elem, attr){
	        return "./view/"+attr.id+'Prev.html';
	    }
	}
});

app.animation('.show', [function() {
	  return {
	    // make note that other events (like addClass/removeClass)
	    // have different function input parameters
	    enter: function(element, doneFn) {
	      jQuery(element).fadeIn(1000, doneFn);

	      // remember to call doneFn so that angular
	      // knows that the animation has concluded
	    },

	    move: function(element, doneFn) {
	      jQuery(element).fadeIn(1000, doneFn);
	    },

	    leave: function(element, doneFn) {
	      jQuery(element).fadeOut(1000, doneFn);
	    }
	  }
	}]);

app.animation('.hmain', [function() {
	  return {
	    // make note that other events (like addClass/removeClass)
	    // have different function input parameters
	    enter: function(element, doneFn) {
	      jQuery(element).fadeIn(1000, doneFn);

	      // remember to call doneFn so that angular
	      // knows that the animation has concluded
	    },

	    move: function(element, doneFn) {
	      jQuery(element).fadeIn(1000, doneFn);
	    },

	    leave: function(element, doneFn) {
	      jQuery(element).fadeOut(1000, doneFn);
	    }
	  }
	}]);