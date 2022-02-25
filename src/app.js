/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let generateRandomNumber = () => {
    let number = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let FirstNumber = Math.floor(Math.random() * number.length);
    return number[FirstNumber];
  };

  let generateRandomDeck = () => {
    let Deck = ["♥", "♣", "♦", "♠"];
    let FirstDeck = Math.floor(Math.random() * Deck.length);

    return Deck[FirstDeck];
  };

  let randomdeck = generateRandomDeck();
  document.getElementById("deck-top").innerText = randomdeck;
  document.getElementById("deck-bottom").innerText = randomdeck;
  let randomnumber = generateRandomNumber();
  document.getElementById("number").innerHTML = randomnumber;

  if (randomdeck == "♦" || randomdeck == "♥") {
    document.getElementById("deck-top").style.color = "red";
    document.getElementById("deck-bottom").style.color = "red";
  } else {
    document.getElementById("deck-top").style.color = "black";
    document.getElementById("deck-bottom").style.color = "black";
  }

  let button = document.getElementById("button");
  console.log(button);
  button.addEventListener("click", () => {
    randomdeck = generateRandomDeck();
    randomnumber = generateRandomNumber();
    document.getElementById("deck-top").innerText = randomdeck;
    document.getElementById("deck-bottom").innerText = randomdeck;
    document.getElementById("number").innerHTML = randomnumber;

    if (randomdeck == "♦" || randomdeck == "♥") {
      document.getElementById("deck-top").style.color = "red";
      document.getElementById("number").style.color = "red";
      document.getElementById("deck-bottom").style.color = "red";
    } else {
      document.getElementById("deck-top").style.color = "black";
      document.getElementById("number").style.color = "black";
      document.getElementById("deck-bottom").style.color = "black";
    }
  });
};
