(function(){

  'use strict';

  var p1 = document.getElementById('js-p-1'),
      p2 = document.getElementById('js-p-2'),
      p3 = document.getElementById('js-p-3'),
      p4 = document.getElementById('js-p-4'),
      translateButton1 = document.getElementById('js-translate-button-1'),
      translateButton2 = document.getElementById('js-translate-button-2'),
      fadeButton = document.getElementById('js-fade-button');

  translateButton1.addEventListener('click', function() {
    Velocity(p1, {
      translateX: 100
    }, {
      duration: 1000
    });
  }, false);

  translateButton2.addEventListener('click', function() {
    Velocity(p2, {
      translateX: [100, 0]
    }, {
      duration: 1000
    });
  }, false);

  fadeButton.addEventListener('click', function() {
    Velocity(p3, {
      opacity: [0, 'linear', 1]
    }, {
      duration: 1000
    });
    Velocity(p4, {
      opacity: [0, 'easeInCirc', 1]
    }, {
      duration: 1000
    });
  }, false);

}());
