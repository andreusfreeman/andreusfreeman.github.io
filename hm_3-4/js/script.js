var element = {
  name: 'name',
  newElement: function(elements, newClass, text, classGround, setAttr, indexName) {
    this.name = document.createElement(elements);
    if (newClass.length > 0) {
      this.name.setAttribute('class', newClass);
    }
    if (setAttr) {
      this.name.setAttribute('type', 'checkbox');
    }
    if (classGround === 'body') {
      document.body.appendChild(this.name);
    } else {
      document.querySelectorAll(classGround)[indexName].appendChild(this.name);
    }
    this.name.innerHTML = text;
  }
}
element.newElement('div', 'container bg-success', '', 'body', 'false', 0);
element.newElement('h4', 'bg-warning text-center', 'Тест по программированию', '.container', 'false', 0);
element.newElement('ol', 'list-questions', '', '.container', 'false', 0);

var quantityQuestions = 3;
var quantityAnswers = 3;
for (var i = 0; i < quantityQuestions; i++) {
  element.newElement('li', 'col-xs-9', '', '.list-questions', 'false', 0);
  element.newElement('h5', '', 'Вопрос № ' + (i + 1), '.col-xs-9', 'false', i);
  element.newElement('ul', 'list-unstyled', '', '.col-xs-9', 'false', i);
  for (var j = 0; j < quantityAnswers; j++) {
    element.newElement('li', 'col-md-8', '', '.list-unstyled', 'false', i);
    element.newElement('input', '', '', '.col-md-8', 'true', i * quantityAnswers + j);
    element.newElement('span', 'text-primary .col-md-1', 'Вариант ответа № ' + (j + 1), '.col-md-8', 'false', i * quantityAnswers + j);
  }
}
element.newElement('div', 'col-md-3', '', '.container', 'false', 0);
element.newElement('button', 'btn btn-primary', 'Проверить мои результаты', '.col-md-3', 'false', 0);
