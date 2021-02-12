// START - USED SERVICES
/*
 *	ExamService.create
 *		PARAMS: 
 *		
 *
 *	ExamService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	ExamService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	courseService.findBy_exam
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ExamService  
 * courseService  
 */
// END - REQUIRED RESOURCES

app.controller('ExamEditController', ['$scope', '$location', '$routeParams', '$q', 'ExamService', 'courseService', 'courseService',
    function ($scope, $location, $routeParams, $q, ExamService , courseService , courseService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = ExamService.get({_id: $scope.id});
        	$scope.external._course_exam = courseService.findBy_exam({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new ExamService();
        	$scope.external._course_exam = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/exams/');
    		});
    	}
    	
    	$scope.remove = function(){
    		ExamService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/exams/');
    		});
    	}
    	
    		
        //manage External relation _exam
        		
    	$scope.list_course_exam = courseService.query();
    	
}]);