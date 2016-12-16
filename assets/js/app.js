$(document).ready(function(){

  $("#main").hide();
  $("#start").click(function () {
  $("#main").show();
  $("#start").remove();
    
    var seconds_left = 60;
    var rights = 0;
    var wrongs = 0;
    var doneIsClicked = false;

function result(){
  for (i=1; i<=9; i++){
  if($('#rightAnswer' + i).is(':checked')) {
  rights++;
   console.log("right:" + rights);      
    };

  };
wrongs = 3 - rights;
    console.log("wrongs:" + wrongs);
    
         };

  function replace() {
  document.getElementById('replace').innerHTML = "<h1>Right Answers:" + rights + " </h1>" +"<br>" +"<h1> Wrong Answers:" + wrongs + "</h1>";      }

  $('#done').click( function(){doneIsClicked = true; result(); replace();});

  var interval = setInterval(function() {
    document.getElementById('timer_div').innerHTML = -- seconds_left;
    var rightAnswer=0;
    if (seconds_left <= 0 || doneIsClicked == true)
    {
        result();
        document.getElementById('timer_div').innerHTML = "All Done";
        clearInterval(interval); 
        replace();  
    }
  }, 
  1000);

});
});