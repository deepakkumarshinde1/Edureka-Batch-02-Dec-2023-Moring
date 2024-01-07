// event are user action

// mouse --> over , out , click , dblclick
// keyboard --> keypress , keyup
// browser --> load , unload , printalways

// add a click event to a button
let btnElement = document.querySelector(".get-message");
let h1Element = document.querySelector("#text-id");

function buttonFunction() {
  h1Element.innerHTML = "The text is changed";
  //   h1Element.style.backgroundColor = "red";
} // function definition
//buttonFunction();// function call

btnElement.addEventListener("click", buttonFunction);

// event are user action

// mouse --> over , out , click , dblclick
// keyboard --> keypress , keyup
// browser --> load , unload , printalways

// add a click event to a button
let btnElement = document.querySelector(".get-message");
let h1Element = document.querySelector("#text-id");

// function buttonFunction() {
//   h1Element.innerHTML = "The text is changed";
// }// common function

btnElement.addEventListener("mouseover", function () {
  h1Element.innerHTML = "The text is changed";
  // callback function
});
