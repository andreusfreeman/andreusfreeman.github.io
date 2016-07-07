requirejs.config({
  baseUrl: "js",
  paths: {
    'jquery': 'https://code.jquery.com/jquery-1.12.3',
    'tmpl': 'template-script'
  },
  shim: {
    'jquery': {
      exports: 'jquery'
    },
    'tmpl': {
      exports: 'template-script'
    }
  }
});
require(
  [
    'model',
    'jquery',
    'tmpl',
    'view',
    'controller'

  ],
  function(model, $, tmpl, view, controller) {

  }
);
