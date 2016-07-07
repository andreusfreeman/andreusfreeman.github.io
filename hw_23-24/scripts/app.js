requirejs.config({
  baseUrl: "scripts",
  paths: {
    'jquery': 'https://code.jquery.com/jquery-1.12.3',
    'tmpl': 'tmpl'
  },
  shim: {
    'jquery': {
      exports: 'jquery'
    },
    'tmpl': {
      exports: 'tmpl'
    }
  }
});
require(
  [
    'jquery',
    'Model',
    'tmpl',
    'View',
    'Controller'
  ],
  function($, Model, tmpl, View, Controller) {
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
  }
);
