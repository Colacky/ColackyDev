
var commandLines = [
["/help - List all commands."],
["/portfolio - See my other projects."],
["/about - Learn more about me."],
["/contact - Contact me."],
["/quit - Leave my domain."],
]

var urlPortfolio = 'portfolio.html'
var urlAbout = 'about.html'
var urlContact = 'contact.html'

function getText(inputText) {
    var i = 0
    var inputText = document.getElementById("cmdInput").value
    document.getElementById("terminalHistory").innerHTML += '>' + inputText +'<br>';
    document.getElementById("cmdInput").value = "";
    console.log(inputText);
    console.log(commandLines[0][0]);

    if (inputText == "/help"){
        for (i = 0; i < commandLines.length; i++){
            document.getElementById("terminalHistory").innerHTML += '>' + commandLines[i] +'<br>';
        }
    }

    else if (inputText == "/portfolio"){
        window.location = urlPortfolio;
    }

    else if (inputText == "/about"){
        window.location = urlAbout;
    }

    else if (inputText == "/quit"){
        window.location.replace("http://www.google.com");
    }

    else if (inputText == "/contact"){
        window.location = urlContact;
    }


}
//function checkInput(inputText) {
    //var i = 0
    //for (i = 0; i < commandLines.length; i++)
    //{
        //if (inputText == commandLines[i].value)
        //{
            //console.log("Yes");
        //} else {
            //console.log("Wrong");
        //}

    //}
//}

$("form").keypress(function(e) {
  //Enter key
  if (e.which == 13) {
    getText();
    return false;
  }
});


