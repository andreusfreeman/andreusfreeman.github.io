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
element.newElement('div', 'col-xs-9 bg-success center-block', '', 'body', '', 0);
element.newElement('h4', 'bg-warning', 'Тест по программированию', '.col-xs-9', '', 0);
element.newElement('ol', 'test', '', '.col-xs-9', '', 0);

var quantityQuestions = 3;
var quantityAnswers = 5;
for (var i = 0; i < quantityQuestions; i++) {
  element.newElement('li', 'test_li', '', '.test', '', 0);
  element.newElement('h5', '', 'Вопрос № ' + (i + 1), '.test_li', '', i);
  element.newElement('ul', 'list-unstyled', '', '.test_li', '', i);
  for (var j = 0; j < quantityAnswers; j++) {
    element.newElement('li', 'col-md-8', '', '.list-unstyled', '', i);
    element.newElement('input', '', '', '.col-md-8', 'true', i * quantityAnswers + j);
    element.newElement('span', 'text-primary col-md-4', 'Вариант ответа № ' + (j + 1), '.col-md-8', '', i * quantityAnswers + j);
  }
}
element.newElement('button', 'btn btn-primary btn-lg active center-block', 'Проверить мои результаты', '.col-xs-9', '', 0);
