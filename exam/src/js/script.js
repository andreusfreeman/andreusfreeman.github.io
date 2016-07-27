'use strict'

$(document).ready(function(){
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
  function grid() {
    var $grid = $('.grid');
    $grid.imagesLoaded(function () {
      $grid.masonry({
        itemSelector: '.grid-item',
        columnWidth: function( containerWidth ) {
          return ( containerWidth / 3 - 10)
        },
        gutterWidth: 10
      });
    });
  };
  if ( loadCheck ) {
    $('.grid').remove();
    var randQuery = ['cat', 'dog', 'hello', 'Ukraine', 'world'];
    var x = Math.floor((Math.random() * randQuery.length - 1) + 1);
    searchSomething(randQuery[x]);
  };
  function searchSomething(query) {
    $.ajax({
      url: "https://pixabay.com/api/?key=2630733-330bf7ac78143b71181089b96&q=" + query + "&image_type=photo",
      dataType : "jsonp",
      success: function (data) {
        var imageResult = tmpl($("#ideas__block-result").html(), {data: data});
        $('.ideas__block').append(imageResult);
        grid();
      },
      error: function() {
        alert('error');
      }
    });
  };
   $('.instruction__block__card-button-left-first').ownCarusel('leftFirst');
   $('.instruction__block__card-button-right-first').ownCarusel('rightFirst');
   $('.instruction__block__card-button-left-middle').ownCarusel('leftMiddle');
   $('.instruction__block__card-button-right-middle').ownCarusel('rightMiddle');
   $('.instruction__block__card-button-left-last').ownCarusel('leftLast');
   $('.instruction__block__card-button-right-last').ownCarusel('rightLast');
 });
