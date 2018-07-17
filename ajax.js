document.addEventListener("DOMContentLoaded", function() {

//varriables
var url = 'http://first-ajax-api.herokuapp.com/';

var step12 = document.querySelector('.step_one');
var step3456 = document.querySelector('.step_3456');
var step7 = document.querySelector('.step_7');
var step8 = document.querySelector('.step_8');
var step9 = document.querySelector('.step_9');

//sections
var section3456 = document.querySelector('#step3456');
var section7 = document.querySelector('#step7');
var section8 = document.querySelector('#step8');
var section9 = document.querySelector('#step9');

//input
var inputStep = document.createElement('input');
inputStep.setAttribute('class', 'textbox');
section8.append(inputStep);
var box = document.querySelector('.textbox');
var textBox = box.value;

console.log(textBox);
//ajax call
step12.addEventListener('click', function(){

  var response =  $.ajax({
      url: url,
      method:'GET',
      dataType:'text'
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log(errorThrown);
    });
});

//ajax call
//URL-ping = done
//URL-pong = fail

step3456.addEventListener('click', function(){

  var response =  $.ajax({
  url:'http://first-ajax-api.herokuapp.com/ping',
  method:'GET',
  dataType:'text',
}).done(function(data){
  var doneResponse = document.createElement('p')
  doneResponse.innerHTML = data;
  section3456.append(doneResponse);
}).fail(function(jqXHR, textStatus, errorThrown) {
  var failResponse = document.createElement('p')
  failResponse.innerHTML = errorThrown;
  section3456.append(failResponse);
}).always(function(){
  console.log('REQUEST COMPLETED');
})

});

//count = number of times visited

step7.addEventListener('click', function(){
  var response = $.ajax({
    url:'http://first-ajax-api.herokuapp.com/count',
    method:'GET',
    dataType:'text',
    data:{amount: 4},
  }).done(function(data) {
    var doneResponse = document.createElement('p')
    doneResponse.innerHTML = data;
    section7.append(doneResponse);
  })
});

//time = timezone w/ data('i.e 'Europe/Sofia')

step8.addEventListener('click', function(){
  var response = $.ajax({
    url:'http://first-ajax-api.herokuapp.com/time',
    method:'GET',
    data:{timezone: 'Asia/Kolkata'},
    dataType:'text',
  }).done(function(dataResponse) {
    var doneResponse = document.createElement('p')
    doneResponse.innerHTML = dataResponse;
    section8.append(doneResponse);
  })

});

//car = car in html markup

step9.addEventListener('click', function(){
  var response = $.ajax({
    url:'http://first-ajax-api.herokuapp.com/a_car',
    method:'GET',
    dataType:'html',
  }).done(function(dataResponse) {
    var doneResponse = document.createElement('ul')
    doneResponse.innerHTML = dataResponse;
    section9.append(doneResponse);
  })

});




});
