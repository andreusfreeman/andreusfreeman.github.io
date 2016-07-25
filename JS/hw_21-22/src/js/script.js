'use strict'
let questions = {
  firstQuestion: 'Choice backend language',
  firstVariant: [
    [ 'PHP', true], ['Javascript', false], ['HTML', false]
  ],
  secondQuestion: 'What programming languages are taught frontend-developers?',
  secondVariant: [
    [ 'HTML/Java/CSS', false], ['Javascript/HTML/PHP', false], ['HTML/CSS/Javascript', true]
  ],
  thirdQuestion: 'What is the most popular framework/library on Javascript?',
  thirdVariant: [
    [ 'jQuery', true], ['Bootstrap', false], ['Dojo', false]
  ]
}

try {
  localStorage.setItem('test', JSON.stringify(questions));
  let data = JSON.parse(localStorage.getItem('test'));

  $(function(){
    let html = $('#easy-tmpl').html()
    let content = tmpl(html, data);
    $('.template-simple').append(content);
  });

  document.querySelector('.check-result').addEventListener('click', function(){
    let rightAnswer = [];
    let checkQuantity = 0;
    for (let answ in data){
      if (typeof data[answ] == 'object') {
        for (let i = 0; i < data[answ].length; i++) {
          rightAnswer.push(data[answ][i][1]);
          if (data[answ][i][1]){
            checkQuantity += 1;
          }
        }
      }
    }
    let flag = false;
    let a = document.getElementsByTagName('input');
    for ( let i = 0; i < a.length; i++){
      if (a[i].checked) {
        if (rightAnswer[i]) {
          flag = true;
          checkQuantity -= 1;
        } else {
          break;
        }
      }
    }
    if (flag && checkQuantity === 0) {
      let mod = document.querySelector('.modal-back');
      document.querySelector('.result-info').innerHTML = 'WIN';
      mod.style.display = 'block';
    }
    else {
      let mod = document.querySelector('.modal-back');
      document.querySelector('.result-info').innerHTML = 'You have done some mistakes! Try again.';
      mod.style.display = 'block';
    }
  })
  let elem = document.querySelector('.button-close');
  elem.addEventListener('click', function() {
    document.querySelector('.modal-back').style.display = 'none';
    document.querySelector('.result-info').innerHTML = '';
    let checkBox = document.getElementsByTagName('input');
    for ( let i = 0; i < checkBox.length; i++){
      checkBox[i].checked = false;
    }
  });
} catch (e) {

}

try {
  module.exports = questions;
} catch (e) {

} finally {

}
