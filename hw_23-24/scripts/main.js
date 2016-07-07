requirejs.config({
    paths:{
		'templ': 'template-script',
		'model': 'mvc/model',
		'view': 'mvc/view',
		'controller': 'mvc/controller',
		'mvc': 'mvc'
    }
});

require(["templ", "model", "view", "controller", "mvc"], function() {
})
