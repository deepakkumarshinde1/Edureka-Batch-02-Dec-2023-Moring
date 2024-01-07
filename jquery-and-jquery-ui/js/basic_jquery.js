// window.addEventListener("load", function () {
//   let h1 = document.querySelector("h1");
//   console.log(h1.innerHTML);

//   let buttons = document.querySelectorAll("button");

//   buttons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       alert("button is clicked");
//     });
//   });
// });

// console.log($);
// $ is a object + function
// $() , $.ajax()
// $(fun) or $('selector')
$(function () {
  $("button").click(function () {
    $("h1").html("Edureka!");
  });
});
