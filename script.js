const music = new Audio('Brooklyn Nine-Nine intro.mp3');

function playIntro(){
    startScreen.style.display = "none";
    playScreen.style.display = "block";

    music.play();
    Titlescreen();

    function Titlescreen(){
        document.getElementById('afbeelding1').style.display = "block";
        }


    setTimeout(function Jake(){

    }, 1000)

    setTimeout(function Rosa(){

    }, 1000)

    setTimeout(function Terry(){

    }, 1000)

    setTimeout(function Amy(){

    }, 1000)

    setTimeout(function Charles(){

    }, 1000)

    setTimeout(function Gina(){

    }, 1000)

    setTimeout(function Holt(){

    }, 1000)

    setTimeout(function Author(){

    }, 1000)
}