/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

document.querySelector(".deck").classList.add(generateRandomSuit());
document.querySelector(".number").innerHTML = generateRandomNumber();
document.querySelector("#button");

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
  let indexN = Math.floor(Math.random() * number.length);
  return number[indexN];
};

let generateRandomSuit = () => {
  let deck = ["♥", "♣", "♦", "♠"];
  let indexS = Math.floor(Math.random() * deck.length);

  return deck[indexS];
};
