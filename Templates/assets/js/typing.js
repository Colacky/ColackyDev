var i = 0;
var txt = 'Welcome to my domain. Type /help if you need it.'; 
var speed = 60; /* Duration in ms */

function typeText() {
  if (i < txt.length) {
    document.getElementById("welcomeText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}
