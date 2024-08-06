// declare Variables
let input = document.getElementById('typeHere'); 
let button = document.getElementById('bt');
let ph = document.getElementById('ph'); 
//  Events
button.onclick =()=>{
// get value
let inputValue = input.value ; 
ph.innerHTML = inputValue;
// clear msg 
input.value = "" ;
}