$url="./view/cat.html";
$urlPrev="./view/catPrev.html";

app.controller('mainCtrl', function($scope,$routeParams,model) {
	$scope.$root.updateC=function(cat){
    	console.log("s");
		model.update(cat);
    }
	
    $scope.sections = model.getMain().then(function(data){
    	$scope.obj = data.main;
    },function(msg){
    	console.log(msg);
    });

    $scope.$root.classMain="show";

    if(typeof $routeParams.docname !=='undefined'){
       	$scope.$root.mainUrl=$urlPrev;
       	$scope.$root.classMain="cacher";
    }
    if(typeof $routeParams.cat !=='undefined'){
       	$scope.$root.mainUrl=$urlPrev
       	$scope.$root.classMain="cacher";
    }
    	
    $scope.changeClass=function(){
		if($scope.classMain=="cacher"){
        	jQuery(".show").addClass("cacher");
        	$scope.$root.classCv="cacher";
        	$scope.$root.classPres="cacher";
        	$scope.$root.classMain="show";
        	
        	$scope.$root.mainUrl=$url
        	$scope.$root.cvUrl=$urlPrev
        	$scope.$root.presUrl=$urlPrev
        }
    }
});
app.controller('cvCtrl', function($scope,$routeParams,model) {
    $scope.sections = model.getCv().then(function(data){
    	$scope.obj = data.cv;
    },function(msg){
    	console.log(msg);
    });

    $scope.$root.classCv="cacher";
    $scope.$root.cvUrl=$urlPrev
	
    if(typeof $routeParams.docname !=='undefined'){
    	$scope.$root.classCv="cacher";
    	$scope.$root.cvUrl=$urlPrev
	}
    if(typeof $routeParams.cat !=='undefined'){
    	$scope.$root.classCv="cacher";
    	$scope.$root.cvUrl=$urlPrev
	}

    $scope.changeClass=function(){
		if($scope.classCv=="cacher"){
			$scope.$root.classMain="cacher";
        	$scope.$root.classPres="cacher";
        	$scope.$root.classCv="show";
        	$scope.$root.cvUrl=$url
        	$scope.$root.mainUrl=$urlPrev
        	$scope.$root.presUrl=$urlPrev
        }
    }
    
    
});

app.controller('presCtrl', function($scope,$routeParams,model) {    
    $scope.sections = model.getPres().then(function(data){
    	$scope.obj = data.pres;
    },function(msg){
    	console.log(msg);
    });
    
    $scope.$root.classPres="cacher";
    $scope.$root.presUrl=$urlPrev;

    $scope.urlVar=$url;
    if(typeof $routeParams.docname !=='undefined'){
		 $scope.$root.classPres="show";
		 $scope.name=$routeParams.docname;
		 $scope.$root.presUrl="./view/doc.html";
		 $scope.urlVar=$scope.$root.presUrl;
	}
    if(typeof $routeParams.cat !=='undefined'){
		 $scope.$root.classPres="show";
		  $scope.$root.presUrl=$url
	}

    $scope.changeClass=function(){
    	if($scope.classPres=="cacher"){
    		$scope.$root.classMain="cacher";
    		$scope.$root.classCv="cacher";
        	$scope.$root.classPres="show";
        	$scope.$root.presUrl=$scope.urlVar;
        	$scope.$root.mainUrl=$urlPrev
        	$scope.$root.cvUrl=$urlPrev
        }
    }

    $scope.retour=function(){
        	$scope.$root.presUrl=$url
    }
});

