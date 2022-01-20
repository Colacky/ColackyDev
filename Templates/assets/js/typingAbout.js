var i = 0;
var txt = "Hello. I'm glad to have you here. \nMy name is Sebastian 'Colacky' Kołacki and I'm a self-taught programmer. \nI've made this website using HTML, Javascrip, jQuery and CSS. \nI've used various resources to learn including w3schools, stackoverflow, youtube and official documentation. \nMy programming-related skills: \n >Python\n >Django\n >HTML\n >CSS\n >Javascript\nI'm always learning new things and expanding my skillset.\nI'm well versed in both corporate and non-corporate environments.\nI also have experience in the finance/administration sector and possess strong interpersonal skills, always setting the bar high."; 
var txt2 = "You can contact me at: \nE-mail: colackys@gmail.com \nDiscord: Colacky#7273 \nGithub: github.com/Colacky"
var txt3 = "To find out about my current and finished projects please check out my website \nhttps://colacky.github.io/#projects \nor visit my github \ngithub.com/colacky"
var speed = 20; /* Duration in ms */

function typeText1() {
    if (i < txt.length) {
        document.getElementById("about").innerHTML += txt.charAt(i)
        i++;
        setTimeout(typeText1, speed)
    }
    document.getElementById("about").disabled = true;
}

function typeText2() {
    if (i < txt2.length) {
        document.getElementById("about").innerHTML += txt2.charAt(i)
        i++;
        setTimeout(typeText2, speed)
    }
    document.getElementById("about").disabled = true;
}

function typeText3() {
    if (i < txt3.length) {
        document.getElementById("about").innerHTML += txt3.charAt(i)
        i++;
        setTimeout(typeText3, speed)
    }
    document.getElementById("about").disabled = true;
}

