app.controller('mainCtrl', function($scope,$routeParams,model) {
    $scope.nom= "Olivon";
    $scope.prenom= "Adrien";
    $scope.name="main";
    $scope.h1= $scope.prenom + " " +  $scope.nom;
    
    $scope.sections = model.getMain().then(function(data){
    	$scope.obj = data.main;
    },function(msg){
    	console.log(msg);
    });

	$scope.$root.mainUrl="./view/cat.html";
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
        	
        	$scope.$root.mainUrl="./view/cat.html";
        	$scope.$root.cvUrl="./view/cvPrev.html";
        	$scope.$root.presUrl="./view/presPrev.html";
        }
    }
});
app.controller('cvCtrl', function($scope,$routeParams,model) {
    $scope.name= "cv";
    $scope.h1="CV";
    
    $scope.sections = model.getCv().then(function(data){
    	$scope.obj = data.cv;
    },function(msg){
    	console.log(msg);
    });

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
        	$scope.$root.cvUrl="./view/cat.html";
        	$scope.$root.mainUrl="./view/mainPrev.html";
        	$scope.$root.presUrl="./view/presPrev.html";
        }
    }
    
    
});

app.controller('presCtrl', function($scope,$routeParams,model) {
    $scope.name= "pres";
    $scope.h1="Portfolio";
    
    $scope.sections = model.getPres().then(function(data){
    	$scope.obj = data.pres;
    },function(msg){
    	console.log(msg);
    });
    
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
		  $scope.$root.presUrl="./view/cat.html";
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
        	$scope.$root.presUrl="./view/cat.html";
    }
});

