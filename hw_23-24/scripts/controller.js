define(
	'Controller',
	['jquery'],
	function($) {
		return function Controller(model, view) {
			var self = this;
			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.item-delete', removeItem);
			view.elements.listContainer.on('click', '.edit-delete', editItem);

			function addItem() {
				if ( $('.item-add').html() === 'edit') {
					var posItem = $('.item-value').attr('data-value');
					var newItem = view.elements.input.val();
					model.editItem(newItem, posItem);
					view.renderList(model.data);
					view.elements.input.val('');
					$('.item-add').html('Add');
				} else {
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				};
			};
			function removeItem() {
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			};
			function editItem() {
				var item = $(this).attr('data-value');
				view.elements.input.val(item);
				$('.item-value').attr('data-value', item);
				$('.item-add').html('edit');
			};
		}
});
