var messageArray = ["Hi there! My name is Alex."];
var textPosition = 0;
var speed = 100;

typewriter = () => {
    document.querySelector("#typewriter").
    innerHTML = messageArray[0].substring(0, textPosition) + "<span>\u25ae</span>";
    if(textPosition++ != messageArray[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);
