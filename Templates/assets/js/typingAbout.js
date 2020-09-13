var i = 0;
var txt = "Hello. I'm glad to have you here. \nMy name is Sebastian 'Colacky' Kołacki and I'm a self-taught freelance programmer. \nI've made this website using HTML, Javascrip, jQuery and CSS. \nI've used various resources to learn including w3schools, stackoverflow, youtube and official documentation. \n My skills: \n>Python\n>Django\n>HTML\n>CSS\n>Javascript\nI'm always learning new things and expanding my skillset.\nI'm'well versed in both corporate and non-corporate environments.\n"; /* Text to be typed */
var speed = 40; /* Duration of typing effect in milliseconds */

function typeText1() {
    if (i < txt.length) {
        document.getElementById("about").innerHTML += txt.charAt(i)
        i++;
        setTimeout(typeText1, speed)
    }
}

