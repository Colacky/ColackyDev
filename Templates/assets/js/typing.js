var i = 0;
var txt = 'Welcome to my domain. Type /help if you need it.'; /* Text to be typed */
var speed = 60; /* Duration of typing effect in milliseconds */

function typeText() {
  if (i < txt.length) {
    document.getElementById("welcomeText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeText, speed);
  }
}
