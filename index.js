
$(document).ready(function(){
   $("section").on("click", "a", function(event) {
  $(event.delegateTarget ).css( "background-color", "#feb72b");
});
 $("section").on("click", "h1", function(event) {
  $(event.delegateTarget ).css( "background-color", "#43d8c9");
});

 $("section").on("click", "p", function(event) {
  $(event.delegateTarget ).css( "background-color", "#ffa41b");
});

 $("section").on("click", "", function(event) {
  $(event.delegateTarget ).css( "background-color", "#ffa41b");
});

 $("p").click(function(){
$("section").css("background-color", "white");
});


 $("i").click(function(){
$("section").css("background-color", "black");
});

});
