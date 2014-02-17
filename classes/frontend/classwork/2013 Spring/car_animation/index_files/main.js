window.onload = function() {
  var mas = document.getElementsByClassName("car")[0];
  var left = 0;
  var top = 0;
  document.body.addEventListener('keydown', function(e){
    console.log(e.which);
    if (e.which === 37) {
      left -= 5;
    }
    else if (e.which === 38) {
      top -= 5;
    }
    else if (e.which === 39) {
      left += 5;
    }
    else if (e.which === 40) {
      top += 5;
    }
    else {
      console.log("wrong key bro");
    }
    mas.style.left = left + "px";
    mas.style.top = top + "px";
  });
  /*
  setInterval(function() {
    left += 5;
    car.style.left = left + "px";
  }, 10);
  */

};