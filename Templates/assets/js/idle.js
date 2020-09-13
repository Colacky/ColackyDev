function idleLogout() {
    var t;
    window.onload = resetTimer;
    window.onmousemove = resetTimer;
    window.onmousedown = resetTimer;  // catches touchscreen presses as well
    window.ontouchstart = resetTimer; // catches touchscreen swipes as well
    window.onclick = resetTimer;      // catches touchpad clicks as well
    window.onkeydown = resetTimer;
    window.addEventListener('scroll', resetTimer, true); // improved; see comments

    function talkBack() {

        // your function for too long inactivity goes here
        // e.g. window.location.href = 'logout.php';
    }
    function randomInteger(min, max) {
         return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function resetTimer() {
        clearTimeout(t);
        t = setTimeout(talkBack, 1000);  // time is in milliseconds
    }
}
idleLogout();