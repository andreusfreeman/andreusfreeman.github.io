(function($) {
  currentLeftValueFirst = 0;
  currentLeftValueMiddle = 0;
  currentLeftValueLast = 0;
  var methods = {
    leftFirst: function () {
      var elementsList = $('.carousel-list-first');
      var maximumOffset = 0;
      var pixelsOffset = 345;
      var elementsCount = elementsList.find('li').length;
      this.click(function() {
        if (currentLeftValueFirst != maximumOffset) {
          currentLeftValueFirst += 345;
          elementsList.animate({ left : currentLeftValueFirst + "px"}, 500);
        } else {
          currentLeftValueFirst = - ((elementsCount - 1) * pixelsOffset);
          elementsList.animate({ left : currentLeftValueFirst + "px"}, 300);
        }
      });
    },
    rightFirst: function() {
      var elementsList = $('.carousel-list-first');
      var pixelsOffset = 345;
      var elementsCount = elementsList.find('li').length;
      var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
      this.click(function() {
        if (currentLeftValueFirst != minimumOffset) {
          currentLeftValueFirst -= 345;
          elementsList.animate({ left : currentLeftValueFirst + "px"}, 500);
        } else {
          currentLeftValueFirst = 0;
          elementsList.animate({ left : currentLeftValueFirst + "px"}, 300);
        }
      });
    },
    leftMiddle: function () {
      var elementsList = $('.carousel-list-middle');
      var maximumOffset = 0;
      var pixelsOffset = 345;
      var elementsCount = elementsList.find('li').length;
      this.click(function() {
        if (currentLeftValueMiddle != maximumOffset) {
          currentLeftValueMiddle += 345;
          elementsList.animate({ left : currentLeftValueMiddle + "px"}, 500);
        } else {
          currentLeftValueMiddle = - ((elementsCount - 1) * pixelsOffset);
          elementsList.animate({ left : currentLeftValueMiddle + "px"}, 300);
        }
      });
    },
    rightMiddle: function() {
      var elementsList = $('.carousel-list-middle');
      var pixelsOffset = 345;
      var elementsCount = elementsList.find('li').length;
      var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
      this.click(function() {
        if (currentLeftValueMiddle != minimumOffset) {
          currentLeftValueMiddle -= 345;
          elementsList.animate({ left : currentLeftValueMiddle + "px"}, 500);
        } else {
          currentLeftValueMiddle = 0;
          elementsList.animate({ left : currentLeftValueMiddle + "px"}, 300);
        }
      });
    },
    leftLast: function () {
      var elementsList = $('.carousel-list-last');
      var maximumOffset = 0;
      var pixelsOffset = 345;
      var elementsCount = elementsList.find('li').length;
      this.click(function() {
        if (currentLeftValueLast != maximumOffset) {
          currentLeftValueLast += 345;
          elementsList.animate({ left : currentLeftValueLast + "px"}, 500);
        } else {
          currentLeftValueLast = - ((elementsCount - 1) * pixelsOffset);
          elementsList.animate({ left : currentLeftValueLast + "px"}, 300);
        }
      });
    },
    rightLast: function() {
      var elementsList = $('.carousel-list-last');
      var pixelsOffset = 345;
      var elementsCount = elementsList.find('li').length;
      var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
      this.click(function() {
        if (currentLeftValueLast != minimumOffset) {
          currentLeftValueLast -= 345;
          elementsList.animate({ left : currentLeftValueLast + "px"}, 500);
        } else {
          currentLeftValueLast = 0;
          elementsList.animate({ left : currentLeftValueLast + "px"}, 300);
        }
      });
    }
  }
  $.fn.ownCarusel = function( method ){
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method with name ' +  method + ' doesn"t exist for jQuery.tooltip' );
    }
    return this;
  };
})(jQuery);
