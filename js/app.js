(function() {
	var app = angular.module('biztasks', []);
	
	app.directive('taskList', function() {
		return {
			restrict: 'E',
			templateUrl: 'task-list.html',
			controller: function() {
				this.tasks = x; 
			},
			controllerAs: 'tasks'
		}
	});
	
	var x = [
		{
			name: 'zadanie 1',
			assignedTo: 'Adam'
		},
		{
			name: 'zadanie 2',
			assignedTo: 'Rafał'
		}
	];
})();