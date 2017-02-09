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

$('a.portfolio-box-caption').click(function(e){
    e.preventDefault();
});
