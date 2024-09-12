const string = document.getElementById('text');
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

btn1.addEventListener('click'  , function() {
    string.textContent = "وعليكم السلام";
} )
btn2.addEventListener('click'  , function() {
    string.style.fontSize = "3rem"
} )
btn3.addEventListener('click'  , function() {
    string.style.fontSize = "0.5rem"
} )
btn4.addEventListener('click'  , function() {
    string.style.color = "green"
} )
btn5.addEventListener('click'  , function() {
    string.style.backgroundColor = "yellow"
} )