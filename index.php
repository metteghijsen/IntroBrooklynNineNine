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
        <div id="title" class="title">
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

    </div>

    <div class="afbeelding">
        <div id="afbeelding1" class="afbeelding">
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
