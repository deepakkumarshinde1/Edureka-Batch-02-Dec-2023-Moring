let btnElement = document.querySelector(".get-message");
let h1Element = document.querySelector("#text-id");
let inputElement = document.querySelector("input");

function checkNumberIsEvenOdd(number) {
  //  check number is even or odd
  let result2 = number % 2; // R
  // if else --> conditional statement
  if (result2 === 0) {
    h1Element.innerHTML = number + " is even";
  } else {
    h1Element.innerHTML = number + " is odd";
  }
}

btnElement.addEventListener("click", function () {
  // get a value form input , select , textarea element
  // we use .value property
  let number = inputElement.value;
  checkNumberIsEvenOdd(number);
});

// let text = prompt("Enter name");
// if (text === "") {
//   alert("Please enter name");
// } else {
//   alert("Entered name is " + text);
// }

// current time

let timerText = document.querySelector("#timerText");

// after every 1 sec
setInterval(function () {
  // collect a date and time
  let date = new Date();
  //   let textDate = date.toLocaleDateString();
  let time = date.toLocaleTimeString();
  timerText.innerHTML = time;
}, 1000); // 1s === 1000ms

// class Human {
//   walking() {
//     console.log("human is walking");
//   }
// }

// let human = new Human();
// human.walking();
