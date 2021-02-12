// START - USED SERVICES
/*
 *	courseService.create
 *		PARAMS: 
 *		
 *
 *	courseService.update
 *		PARAMS: 
 *					ObjectId id - Id
 *		
 *
 *	courseService.get
 *		PARAMS: 
 *					ObjectId id - Id resource
 *		
 *
 *	studentService.findBy_course
 *		PARAMS: 
 *					Objectid key - Id of model to search for
 *		
 *
 *	ExamService.list
 *		PARAMS: 
 *		
 *
 */
// END - USED SERVICES

// START - REQUIRED RESOURCES
/*
 * ExamService  
 * courseService  
 * studentService  
 */
// END - REQUIRED RESOURCES

app.controller('courseEditController', ['$scope', '$location', '$routeParams', '$q', 'ExamService', 'courseService', 'studentService', 'ExamService', 'studentService',
    function ($scope, $location, $routeParams, $q, ExamService , courseService , studentService , ExamService, studentService) {

    	//manage create and save
		$scope.external = {};
		
    	if ($routeParams.id != 'new')
    	{
        	$scope.id = $routeParams.id;
        	$scope.obj = courseService.get({_id: $scope.id});
        	$scope.external._student_course = studentService.findBy_course({key: $scope.id});
        	
    	}
    	else{
    		$scope.obj = new courseService();
        	$scope.external._student_course = [];
        	
    	}
    	
    	$scope.save = function(){
    		$scope.obj.$save().then(function(data){
    			$scope.obj=data;
        		$location.path('/courses/');
    		});
    	}
    	
    	$scope.remove = function(){
    		courseService.remove({_id: $scope.obj._id}).$promise.then(function(){
				$('#removeModal').modal('hide');
				$('.modal-backdrop').remove();
				$('.modal-open').removeClass("modal-open");
        		$location.path('/courses/');
    		});
    	}
    	
    		
        //manage relation _exam
        		
    	$scope.list_Exam = ExamService.query();

    	$scope.contain_Exam = function(item){
    		if (!$scope.obj._exam) return false;
    		return $scope.obj._exam.indexOf(item) != -1;
    	}
		    	
		$scope.add_Exam = function(item){
			if(!$scope.obj._exam)
				$scope.obj._exam = [];
			$scope.obj._exam.push(item);
		}
		
		$scope.remove_Exam = function(index){
			$scope.obj._exam.splice(index, 1);
		}
    		
        //manage External relation _course
        		
    	$scope.list_student_course = studentService.query();
    	
}]);