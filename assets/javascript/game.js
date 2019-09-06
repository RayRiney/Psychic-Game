
var secretNumber = getRandomNumber();

 (Math.round(Math.random() * 20))+1

 
function checkUserGuess()
{

var inputField = document.getElementById("userguess")["0"].value;

var guess = inputField.value

if (guess == secretNumber) displayOutput("win");
else if (guess > secretNumber) displayOutput("high");
else if (guess < secretNumber) displayOutput("low");
else displayOutput("error");

var guess = inputField.select();

}
function displayOutput(_result)
{}

function reset()
{


}

var imageName = "";
var caption = "";
switch(result)
{
    case "win":
    imageName = "zot zot.gif";
    caption = "Shower in peace.";
   
    break

    case "High":
    imageName = "Toohigh.png";
    caption = "Are you one of those cool people?";
    break;

    case "low":
    imageName = "Too-low.jpg"; 
     caption = "Come on! TooLow!"; 
     break;
     
     case "error":
     imageName = "giphy.webp";
     caption = "Try a number fat fingers!";


{

    document.getElementById()
