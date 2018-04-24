$(document).ready(function() {




});
// initalizing firebase for multiplayer game
var config = {
    apiKey: "AIzaSyCy5IUHmjeF_2HpmHHVZl-ZbLoJXvMqs1E",
    authDomain: "rps-multiplayer-cb800.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-cb800.firebaseio.com",
    projectId: "rps-multiplayer-cb800",
    storageBucket: "",
    messagingSenderId: "516051947338"
};

firebase.initializeApp(config);


// Change computer choices to a multiplayer function?

        
        var computerChoices = ["r", "p", "s"];
    
       
        var wins = 0;
        var losses = 0;
        var ties = 0;
    

        document.onkeyup = function(event) {

      
      var userGuess = event.key;
  
        
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
       
      if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r") && (computerGuess === "s")) {
            wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
            losses++;
        } else if ((userGuess === "s") && (computerGuess === "r")) {
            losses++;
        } else if ((userGuess === "s") && (computerGuess === "p")) {
            wins++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
            wins++;
        } else if ((userGuess === "p") && (computerGuess === "s")) {
            losses++;
        } else if (userGuess === computerGuess) {
            ties++;
        }

    
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

     
      document.querySelector("#game").innerHTML = html;
    }
};