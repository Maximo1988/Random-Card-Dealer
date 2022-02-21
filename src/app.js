/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

document.getElementsByTagName(".deck").innerHTML(generateRandomDeck());
document.getElementsByTagName(".number").innerHTML = generateRandomNumber();
document.getElementsByTagName("#button").innerHTML;

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

  return deck[FirstDeck];
};
