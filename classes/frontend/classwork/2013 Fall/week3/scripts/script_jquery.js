$(document).ready(function() {
  var p = $("#my-p");
  console.log(p);
  
  $(p).dblclick(function() { // anonymous callback function that changes
                          // the color of the paragraph. ONLY run
                          // when the paragraph is clicked.
    $(p).css({color: "red", backgroundColor: "blue"});
    $(p).html("Something funky with jQuery!");
    //alert("hi");
    $("h1").animate({color: "green"}, 10*1000)
  })

  $(window).resize(function() {
    console.log($(window).width());
  });
  // Runs normally.
  var lis = $("li");
  for(var index=0; index<lis.length; index++) {
    var li = lis[index];
    var color = Math.floor((256.0/lis.length) * index);
    $(li).css("backgroundColor",
      "rgb("+color+","+color+","+color+")");
  }

  // var response = prompt("jQuery, or plain Javascript?");
  // console.log(response);
});
