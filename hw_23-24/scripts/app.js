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
    'miew',
    'montroller'
  ],
  function($, model, tmpl, miew, montroller) {
    $(function() {
		var firstToDoList = [
			'I am studing CSS',
			'I am studing HTML',
			'I am studing Javascript',
			'I am studing AngularJS'
		];
		var model = new model(firstToDoList);
		var view = new miew(model);
		var controller = new montroller(model, view);
	});
  }
);
