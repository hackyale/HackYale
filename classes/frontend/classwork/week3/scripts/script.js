window.onload = function() {          // Wait for DOM to load.
  var p = document.getElementById("my-p");
  console.log(p);                     // Returns just one element
  p.style.color = "red";
  p.style.backgroundColor = "blue";
  p.innerHTML = "Something funky!!"

  var lis = document.getElementsByTagName("li"); // An array

  for(var index=0; index<lis.length; index++) {
    var li = lis[index];
    var color = Math.floor((256.0/lis.length) * index);
    li.style.backgroundColor = "rgb("+color+","+color+","+color+")";
  }

  // var response = prompt("Red, green or blue?");
  // console.log(response);
};                                    // Don't forget semicolon!
