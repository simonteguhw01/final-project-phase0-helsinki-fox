var character = document.getElementById("character");
var block = document.getElementById("block");

function jump () {
    if(character.classList != "animation") {   
        character.classList.add("animation");
    }
    setTimeout(function () {
            character.classList.remove("animation");
    },500);
} 

 var dead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 70 && blockLeft > 10 && characterTop >= 120) {
        alert("Man u suck KEKW, refresh page to restart")
    }
},10)
