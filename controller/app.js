var app = angular.module('appMod', ["ngAnimate","ngRoute"]);

app.factory('model',function(){
	var factory = {
			
		main : [],
		cv : [],
		pres : [],
		docs : [],
		
		getMain : function(){
			return factory.main;
		},
		getCv : function(){
			return factory.cv;
		},
		getPres : function(){
			return factory.pres;
		},
		getDoc : function(id){
			return factory.docs[id];
		}
	}
});

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

app.controller('mainCtrl', function($scope,$routeParams) {
    $scope.nom= "Olivon";
    $scope.prenom= "Adrien";
    $scope.name="main";
    $scope.h1= $scope.prenom + " " +  $scope.nom;

	$scope.$root.mainUrl="./view/main.html";
    $scope.$root.classMain="show";

    if(typeof $routeParams.docname !=='undefined'){
       	$scope.$root.mainUrl="./view/mainPrev.html";
       	$scope.$root.classMain="cacher";
    }
    if(typeof $routeParams.cat !=='undefined'){
       	$scope.$root.mainUrl="./view/mainPrev.html";
       	$scope.$root.classMain="cacher";
    }
    	
    $scope.changeClass=function(){
		if($scope.classMain=="cacher"){
        	jQuery(".show").addClass("cacher");
        	$scope.$root.classCv="cacher";
        	$scope.$root.classPres="cacher";
        	$scope.$root.classMain="show";
        	
        	$scope.$root.mainUrl="./view/main.html";
        	$scope.$root.cvUrl="./view/cvPrev.html";
        	$scope.$root.presUrl="./view/presPrev.html";
        }
    }
});

app.controller('cvCtrl', function($scope,$routeParams) {
    $scope.name= "cv";
    $scope.h1="CV";

    $scope.$root.classCv="cacher";
    $scope.$root.cvUrl="./view/cvPrev.html";
	
    if(typeof $routeParams.docname !=='undefined'){
    	$scope.$root.classCv="cacher";
    	$scope.$root.cvUrl="./view/cvPrev.html";
	}
    if(typeof $routeParams.cat !=='undefined'){
    	$scope.$root.classCv="cacher";
    	$scope.$root.cvUrl="./view/cvPrev.html";
	}

    $scope.changeClass=function(){
		if($scope.classCv=="cacher"){
			$scope.$root.classMain="cacher";
        	$scope.$root.classPres="cacher";
        	$scope.$root.classCv="show";
        	$scope.$root.cvUrl="./view/cv.html";
        	$scope.$root.mainUrl="./view/mainPrev.html";
        	$scope.$root.presUrl="./view/presPrev.html";
        }
    }
});

app.controller('presCtrl', function($scope,$routeParams) {
    $scope.name= "pres";
    $scope.h1="Portfolio";
    
    $scope.$root.classPres="cacher";
    $scope.$root.presUrl="./view/presPrev.html";

    $scope.urlVar="./view/pres.html";
    if(typeof $routeParams.docname !=='undefined'){
		 $scope.$root.classPres="show";
		 $scope.name=$routeParams.docname;
		 $scope.$root.presUrl="./view/doc.html";
		 $scope.urlVar=$scope.$root.presUrl;
	}
    if(typeof $routeParams.cat !=='undefined'){
		 $scope.$root.classPres="show";
		  $scope.$root.presUrl="./view/pres.html";
	}

    $scope.changeClass=function(){
    	if($scope.classPres=="cacher"){
    		$scope.$root.classMain="cacher";
    		$scope.$root.classCv="cacher";
        	$scope.$root.classPres="show";
        	$scope.$root.presUrl=$scope.urlVar;
        	$scope.$root.mainUrl="./view/mainPrev.html";
        	$scope.$root.cvUrl="./view/cvPrev.html";
        }
    }

    $scope.retour=function(){
        	$scope.$root.presUrl="./view/pres.html";
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