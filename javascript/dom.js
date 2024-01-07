let text = "Edureka is a e-learning platform";
// DOM --> Document object model
// DOm manipulation

//document.querySelector();// one element of html
//document.querySelectorAll();// List element of html

let h1Element = document.querySelector("#text-id");
// console.log(h1Element.innerHTML);

h1Element.innerHTML += text; // append / join / concat
