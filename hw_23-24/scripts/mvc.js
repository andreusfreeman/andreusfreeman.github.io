$(function() {
		var firstToDoList = [
			'I am studing CSS',
			'I am studing HTML',
			'I am studing Javascript',
			'I am studing AngularJS'
		];
		var model = new Model(firstToDoList);
		var view = new View(model);
		var controller = new Controller(model, view);
	});
