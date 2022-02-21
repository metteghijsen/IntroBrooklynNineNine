const music = new Audio('Brooklyn Nine-Nine intro.mp3');

function playIntro(){
    startScreen.style.display = "none";
    playScreen.style.display = "block";

    music.play();

    setTimeout(function Titlescreen(){
        document.getElementById('afbeelding1').style.display = "block";
    })

    setTimeout(function Jake(){
        document.getElementById('afbeelding1').style.display = "none";
        document.getElementById('afbeelding2').style.display = "block";
    },2200);

    setTimeout(function Rosa(){
        document.getElementById('afbeelding2').style.display = "none";
        document.getElementById('afbeelding3').style.display = "block";
    }, 4400)

    setTimeout(function Terry(){
        document.getElementById('afbeelding3').style.display = "none";
        document.getElementById('afbeelding4').style.display = "block";
    }, 6600)

    setTimeout(function Amy(){
        document.getElementById('afbeelding4').style.display = "none";
        document.getElementById('afbeelding5').style.display = "block";
    }, 8800)

    setTimeout(function Charles(){
        document.getElementById('afbeelding5').style.display = "none";
        document.getElementById('afbeelding6').style.display = "block";
    }, 11000)

    setTimeout(function Gina(){
        document.getElementById('afbeelding6').style.display = "none";
        document.getElementById('afbeelding7').style.display = "block";
    }, 13200)

    setTimeout(function Holt(){
        document.getElementById('afbeelding7').style.display = "none";
        document.getElementById('afbeelding8').style.display = "block";
    }, 15400)

    setTimeout(function Author(){
        document.getElementById('afbeelding8').style.display = "none";
        document.getElementById('afbeelding9').style.display = "block";
    }, 17600)
}

