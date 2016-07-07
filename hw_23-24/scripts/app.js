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
    'model',
    'tmpl',
    'view',
    'controller'
  ],
  function($, model, tmpl, view, controller) {
    $(function() {
		var firstToDoList = [
			'I am studing CSS',
			'I am studing HTML',
			'I am studing Javascript',
			'I am studing AngularJS'
		];
		var model = new model(firstToDoList);
		var view = new view(model);
		var controller = new controller(model, view);
	});
  }
);
