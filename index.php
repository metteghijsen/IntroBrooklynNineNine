<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="img/icon.png">
    <link rel="stylesheet" href="style.css">
    <title>Brooklyn Nine-Nine</title>
</head>
<body>

<section id="startScreen">
    <div class="container-startscreen">
        <h1>BROOKLYN NINE-NINE</h1>
        <p>by Mette Ghijsen</p>
        <input onclick="playIntro()" type="submit" id="buttonStart" class="playbutton" value="START">
    </div>
</section>

<section id="playScreen" style="display: none">
    <div class="container-text">
        <div id="title" class="title" style="display: none">
            <div class="brooklyn">
                <h1>
                    BROOKLYN
                </h1>
            </div>
            <div class="nine-nine">
                <p>
                    NINE-NINE
                </p>
            </div>
        </div>

        <div class="character-description">
            <div class="jake" id="jake" style="display: none">
                <p>starring</p>
                <h1>ANDY </h1>
                <h1>SAMBERG</h1>
            </div>

            <div class="rosa" id="rosa" style="display: none">
                <h1>STEPHANIE <br>
                    BEATRIZ</h1>
            </div>

            <div class="terry" id="terry" style="display: none">
                <h1>TERRY <br>
                    CREWS</h1>
            </div>

            <div class="amy" id="amy" style="display: none">
                <h1>MELISSA <br>
                    FUMERO</h1>
            </div>

            <div class="charles" id="charles" style="display: none">
                <h1>JOE <br>
                    LO TRUGLIO</h1>
            </div>

            <div class="gina" id="gina" style="display: none">
                <h1>CHELSEA <br>
                    PERETTI</h1>
            </div>

            <div class="holt" id="holt" style="display: none">
                <p>and</p>
                <h1>ANDRE <br>
                    BRAUGHTER</h1>
            </div>

            <div class="creator" id="creator" style="display: none">
                <p>created by</p>
                <h1>METTE <br>
                    GHIJSEN</h1>
            </div>
        </div>
    </div>

    <div class="character-overlay">
        <div id="jakeoverlay" class="jakeoverlay" style="display: none">
            <img src="img/jakeoverlay.png">
        </div>

        <div id="rosaoverlay" class="rosaoverlay" style="display: none">
            <img src="img/rosaoverlay.png">
        </div>

        <div id="terryoverlay" style="display: none">
            <img src="img/terryoverlay1.png" class="terryoverlay">
            <img src="img/terryoverlay2.png" class="terryoverlay2">
        </div>

        <div id="amyoverlay" class="amyoverlay" style="display: none">
            <img src="img/amyoverlay.png">
        </div>

        <div id="charlesoverlay" class="charlesoverlay" style="display: none">
            <img src="img/charlesoverlay.png"">
        </div>

        <div id="ginaoverlay" style="display: none">
            <img src="img/ginaoverlay.png" class="ginaoverlay">
            <img src="img/ginaoverlay2.png" class="ginaoverlay2">
        </div>

        <div id="holtoverlay" class="holtoverlay" style="display: none">
            <img src="img/holtoverlay.png">
        </div>
    </div>

    <div id="overlay">
    </div>

    <div class="afbeelding" id="afbeelding">
        <div id="afbeelding1">
            <img src="img/afbeelding1.png">
        </div>

        <div id="afbeelding2" style="display: none">
            <img src="img/afbeelding2.png">
        </div>

        <div id="afbeelding3" style="display: none">
            <img src="img/afbeelding3.png">
        </div>

        <div id="afbeelding4" style="display: none">
            <img src="img/afbeelding4.png">
        </div>

        <div id="afbeelding5" style="display: none">
            <img src="img/afbeelding5.png">
        </div>

        <div id="afbeelding6" style="display: none">
            <img src="img/afbeelding6.png">
        </div>

        <div id="afbeelding7" style="display: none">
            <img src="img/afbeelding7.png">
        </div>

        <div id="afbeelding8" style="display: none">
            <img src="img/afbeelding8.png">
        </div>

        <div id="afbeelding9" style="display: none">
            <img src="img/afbeelding9.png">
        </div>
    </div>

</section>

</body>
<script src="script.js"></script>
</html>
