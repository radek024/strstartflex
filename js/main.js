var hourEl=document.querySelector('.hour');
var minEl=document.querySelector('.min');
var secEl=document.querySelector('.sec');

document.addEventListener("DOMContentLoaded", function(){
 setInterval(function(){
  var now=new Date();
  hourEl.innerText=(now.getHours()>=10)? now.getHours() : "0"+now.getHours();
  minEl.innerText=(now.getMinutes()>=10)? now.getMinutes() : "0"+now.getMinutes();
  secEl.innerText=(now.getSeconds()>=10)? now.getSeconds(): "0"+now.getSeconds();
}, 1000)}, false);
