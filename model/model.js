app.factory('model',function($http, $q){
	var factory = {
		fData : false,
		cat : false,
		docs : [],
		
		getData : function(deferred){
			$http.get("./controller/controller.php")
				.success(function(data, status){
					factory.aData = data;
					deferred.resolve(factory.aData);

				}).error(function(data, status){
					deferred.reject("Impossible de se connecter à la BDD :(");
				});
		},
		getCv : function(){
			if(factory.fData){
				return factory.aData;
			}else{
				var deferred = $q.defer();
				factory.getData(deferred)
				return deferred.promise;
				factory.fData=true;
				return factory.fData.cv;
			}
		},
		getMain : function(){
			if(factory.fData){
				return factory.aData;
			}else{
				var deferred = $q.defer();
				factory.getData(deferred)
				return deferred.promise;
				factory.fData=true;
				return factory.fData.main;
			}
		},
		getPres : function(){
			if(factory.fData){
				return factory.aData;
			}else{
				var deferred = $q.defer();
				factory.getData(deferred)
				return deferred.promise;
				factory.fData=true;
				return factory.fData.pres;
			}
		},
		update : function(obj){
			$http.post('./controller/controller.php',obj).success(function(data, status) {
				console.log("t");
	            console.log(data);
	        }).err;
		},
		getDoc : function(id){
			return factory.docs[id];
		}
	}
	return factory;
});