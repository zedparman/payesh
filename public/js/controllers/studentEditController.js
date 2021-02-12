// START - USED SERVICES
/*
 *	studentService.create
 *		PARAMS: 
 *		
 *
 *	studentService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	studentService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	courseService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * courseService  
 * studentService  
 */
// END - REQUIRED RESOURCES

app.controller('studentEditController', ['$scope', '$location', '$routeParams', '$q', 'courseService', 'studentService', 'courseService',
    function ($scope, $location, $routeParams, $q, courseService , studentService , courseService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = studentService.get({_id: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new studentService();
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/students/');
    		});
    	}
    	
    	$scope.remove = function(){
    		studentService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/students/');
    		});
    	}
    	
    		
        //manage relation _course
        		
    	$scope.list_course = courseService.query();

    	$scope.contain_course = function(item){
    		if (!$scope.obj._course) return false;
    		return $scope.obj._course.indexOf(item) != -1;
    	}
		    	
		$scope.add_course = function(item){
			if(!$scope.obj._course)
				$scope.obj._course = [];
			$scope.obj._course.push(item);
		}
		
		$scope.remove_course = function(index){
			$scope.obj._course.splice(index, 1);
		}
}]);