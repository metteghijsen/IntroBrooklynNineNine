# Intro Brooklyn Nine-Nine

## Project description
I made this project as a result of a school assignment. The assignment was to recreate an intro or outro in a web page. Since I like Brooklyn Nine-Nine, I decided to recreate its intro. 

When you open the project, a screen comes up where you can fill in the names of all the characters. This allows you to create your own Brooklyn Nine-Nine intro.
When you press the play button, the intro will play in your browser.

## Installation
You can "install" this web page by downloading it and running it on a live server. You could use an external application such as [XAMPP](https://www.apachefriends.org/download.html) for this purpose. IDEs like Visual Studio Code have this feature built in.

When using XAMPP it is important to put the project in the htdocs folder. Then you can click on the Apache module. When you go to your browser and type in localhost/project name, it should open. 

In case you have Visual Studio Code installed, you can open the project in there. Clicking on the 'Go Live' button in the status bar will open a live server where you should be able to see the project.

## Usage
If you go to [my school-website](https://i481695.hera.fhict.nl/dev-workshop-1/), you can use the project without installing it.
This web page plays the intro to Brooklyn Nine-Nine. If you don't want to change anything about the intro, you can start the intro by pressing the "start" button. The intro will then play as you are used to seeing it.

If you would like to change the names of the characters, you can do so by using the text fields on the start screen. When you have entered the desired names, you can press the start button. If you have left any text boxes blank, the names of the original actors will be displayed.

## Architecture

The main page (index.php) actually contains every page that will be displayed throughout the intro. These are by styling in the CSS file (style.css) all set to "display: none" by default. That's why at first you only see the start screen.

The JavaScript file (script.js) is used to show these elements at the right time, since the intro is made to the rhythm of the music. Playing the music when the start button is pressed is also done in this file.

## Link to original intro
https://www.youtube.com/watch?v=v0QTdCHX_-c

