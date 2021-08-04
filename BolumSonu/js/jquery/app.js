
$(function(){

var url = "https://wordapi.azurewebsites.net/word";;

var tr = $("#tr");// the id of the heading
var en = $("#en");// the id of the heading
$.get(url, function (response) {
var word = response.data;
//$('body').css('background', 'grey');

tr.text(word.tr);
en.text(word.en);
});
});



