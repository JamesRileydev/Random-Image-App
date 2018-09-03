window.onload = function() {

$('#btn').click(function(){
// alert("Dog button clicked");
$.getJSON("https://dog.ceo/api/breeds/image/random")
.done(function(data){
  console.log(data);
  $('#dogImg').attr("src", data.message);
})
.fail(function(){
  alert("Failure of some kind");
})
});



}