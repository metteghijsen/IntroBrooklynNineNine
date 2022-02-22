const music = new Audio('Brooklyn Nine-Nine intro.mp3');

function playIntro(){
    startScreen.style.display = "none";
    playScreen.style.display = "block";

    music.play(); //muziek gaat aan

    setTimeout(function Titlescreen(){ //titelscherm komt in beeld
        document.getElementById('afbeelding1').style.display = "block";
        document.getElementById('title').style.display = "flex";
    })

    setTimeout(function Jake(){ //jake komt in beeld
        document.getElementById('afbeelding1').style.display = "none";
        document.getElementById('title').style.display = "none";

        document.getElementById('afbeelding2').style.display = "block";
        setTimeout(function Overlay(){ //overlay met tekst
            document.getElementById('overlay').style.display= "block";
            document.getElementById('jake').style.display= "block";
            document.getElementById('jakeoverlay').style.display = "block";
        },1000)
    },2200);

    setTimeout(function Rosa(){ //jake uit beeld, rosa in beeld
        document.getElementById('afbeelding2').style.display = "none";
        document.getElementById('overlay').style.display= "none";
        document.getElementById('jake').style.display= "none";
        document.getElementById('jakeoverlay').style.display = "none";

        document.getElementById('afbeelding3').style.display = "block";
        setTimeout(function Overlay(){ //overlay met tekst
            document.getElementById('overlay').style.display= "block";
            document.getElementById('overlay').style.backgroundColor = "rgba(0,123,245,0.5)";
            document.getElementById('rosa').style.display= "block";
            document.getElementById('rosaoverlay').style.display = "block";
        },1000)
    }, 4400)

    setTimeout(function Terry(){ //rosa uit beeld, terry in beeld
        document.getElementById('afbeelding3').style.display = "none";
        document.getElementById('overlay').style.display= "none";
        document.getElementById('rosa').style.display= "none";
        document.getElementById('rosaoverlay').style.display = "none";

        document.getElementById('afbeelding4').style.display = "block";
        setTimeout(function Overlay(){ //overlay met tekst
            document.getElementById('overlay').style.display= "block";
            document.getElementById('overlay').style.backgroundColor = "rgba(245,82,0,0.5)";
            document.getElementById('terry').style.display= "block";
            document.getElementById('terryoverlay').style.display = "block";
        },1000)
    }, 6600)

    setTimeout(function Amy(){ //terry uit beeld, amy in beeld
        document.getElementById('afbeelding4').style.display = "none";
        document.getElementById('overlay').style.display= "none";
        document.getElementById('terry').style.display= "none";
        document.getElementById('terryoverlay').style.display = "none";

        document.getElementById('afbeelding5').style.display = "block";
        setTimeout(function Overlay(){ //overlay met tekst
            document.getElementById('overlay').style.display= "block";
            document.getElementById('overlay').style.backgroundColor = "rgba(245,208,0,0.5)";
            document.getElementById('amy').style.display= "block";
            document.getElementById('amyoverlay').style.display = "block";
        },1000)
    }, 8800)

    setTimeout(function Charles(){ //amy uit beeld, charles in beeld
        document.getElementById('afbeelding5').style.display = "none";
        document.getElementById('overlay').style.display= "none";
        document.getElementById('amy').style.display= "none";
        document.getElementById('amyoverlay').style.display = "none";

        document.getElementById('afbeelding6').style.display = "block";
        setTimeout(function Overlay(){ //overlay met tekst
            document.getElementById('overlay').style.display= "block";
            document.getElementById('overlay').style.backgroundColor = "rgba(255,0,0,0.5)";
            document.getElementById('charles').style.display= "block";
            document.getElementById('charlesoverlay').style.display = "block";
        },1000)
    }, 11000)

    setTimeout(function Gina(){ //charles uit beeld, gina in beeld
        document.getElementById('afbeelding6').style.display = "none";
        document.getElementById('overlay').style.display= "none";
        document.getElementById('charles').style.display= "none";
        document.getElementById('charlesoverlay').style.display = "none";

        document.getElementById('afbeelding7').style.display = "block";
        setTimeout(function Overlay(){ //overlay met tekst
            document.getElementById('overlay').style.display= "block";
            document.getElementById('overlay').style.backgroundColor = "rgba(0,123,245,0.5)";
            document.getElementById('gina').style.display= "block";
            document.getElementById('ginaoverlay').style.display = "block";
        },1000)
    }, 13200)

    setTimeout(function Holt(){ //gina uit beeld, holt in beeld
        document.getElementById('afbeelding7').style.display = "none";
        document.getElementById('overlay').style.display= "none";
        document.getElementById('gina').style.display= "none";
        document.getElementById('ginaoverlay').style.display = "none";

        document.getElementById('afbeelding8').style.display = "block";
        setTimeout(function Overlay(){ //overlay met tekst
            document.getElementById('overlay').style.display= "block";
            document.getElementById('overlay').style.backgroundColor = "rgba(245,82,0,0.5)";
            document.getElementById('holt').style.display= "block";
            document.getElementById('holtoverlay').style.display = "block";
        },1000)
    }, 15400)

    setTimeout(function Author(){ //holt uit beeld, credits in beeld
        document.getElementById('afbeelding8').style.display = "none";
        document.getElementById('overlay').style.display= "none";
        document.getElementById('holt').style.display= "none";
        document.getElementById('holtoverlay').style.display = "none";

        document.getElementById('afbeelding9').style.display = "block";
        setTimeout(function Credits(){
            document.getElementById('creator').style.display= "block";
        },1000)
    }, 17600)
}

