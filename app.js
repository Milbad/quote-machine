$(document).ready(function() {
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(data) {
    $("#the-quote").append(data[0].content);
    $("#the-source").append(data[0].title);
  });
  //Click on the new quote button to generate a new quote.
  $("#new-quote").click(function() {
    $("#the-quote").html('');
    $("#the-source").html('');
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(data) {
      $("#the-quote").append(data[0].content);
      $("#the-source").append(data[0].title);
    });
    //update the background color
    var newBrightness = Math.random();
    var newColor = Math.floor(Math.random() * 16777215).toString(16);
    //newColor = "#" + ("000000" + newColor).slice(-6);
    $("#quotebox").setAttribute('style', 'filter:brightness(' + newBrightness + '); -webkit-filter:brightness(' + newBrightness + '); -moz-filter:brightness(' + newBrightness + ')');
    //$("#quotebox").css("filter:brightness", newBrightness);
    //("body").css("background-color", newColor);
    //$(".fa-twitter-square").css("background-color", newColor);
  });
  //Click on the twitter icon open the twitter page
  var quote = document.getElementById('the-quote');
  var source = document.getElementById('the-source');
  var twitterIcon = document.getElementsByClassName('fa-twitter-square');
  $(".fa-twitter-square").click(function() {
    var newurl = "https://twitter.com/intent/tweet?text=" + quote.innerText + source.innerText + "&hashtags=quote";
    window.open(newurl);
  });

});
