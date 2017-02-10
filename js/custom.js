$("#page2-button").click(function(e){
  e.preventDefault();
  $("#page1")[0].style.display = "none";
  $("#page2")[0].style.display = "block";
});

$("#page1-button").click(function(e){
  e.preventDefault();
  $("#page1")[0].style.display = "block";
  $("#page2")[0].style.display = "none";
});

$('a.portfolio-box').click(function(e){
    e.preventDefault();
});

$(".eachProject").click(function(){
    var aux = $(".eachProject :first-child");
    window.open(aux.attr("href"), '_blank');
});
