'use strict'
var loadCheck = true;
document.body.addEventListener('keypress', function(event) {
  if (document.querySelector('.ideas__search').value.length > 0 && event.keyCode === 13) {
    $('.grid').remove();
    searchSomething(document.querySelector('.ideas__search').value);
    document.querySelector('.ideas__search').value = '';
    loadCheck = false;
  }
});
document.querySelector('.ideas__button-search').addEventListener('click', function(event) {
  if (document.querySelector('.ideas__search').value.length > 0) {
    $('.grid').remove();
    searchSomething(document.querySelector('.ideas__search').value);
    document.querySelector('.ideas__search').value = '';
    loadCheck = false;
  }
});

if ( loadCheck ) {
  $('.grid').remove();
  var randQuery = ['cat', 'dog', 'hello', 'Ukraine', 'world'];
  var x = Math.floor((Math.random() * randQuery.length - 1) + 1);
  searchSomething(randQuery[x]);
};
console.log(loadCheck);
function searchSomething(query) {
  $.ajax({
           url: "https://pixabay.com/api/?key=2630733-330bf7ac78143b71181089b96&q=" + query + "&image_type=photo",
           dataType : "jsonp",
           success: function (data) {
              var imageResult = tmpl($("#ideas__block-result").html(), {data: data});
              $('.ideas__block').append(imageResult);
           },
           error: function() {
             alert('error');
           }
         });
       }
var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  itemSelector: '.grid-item',
  columnWidth: 300
});
