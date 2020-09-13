
function getText() {
    var inputText = document.getElementById("cmdInput").value
    document.getElementById("terminalHistory").innerHTML += '>' + inputText +'<br>';
    document.getElementById("cmdInput").value = "";
}
