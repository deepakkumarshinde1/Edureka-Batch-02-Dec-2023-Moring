// store multiple data
// array
// array is collection data is cal be same or different type
// index/key always start with zero

let list = ["Deepak", "Edureka", "Amit", "Neha"];
console.log(list.length);
console.log(list[1]);

// jsObject
// collection data but here keys are user defined
let student = {
  roll_no: 10,
  marks: 30,
  name: "Deepak`s",
  age: 32,
  organization: "Edureka",
}; // JSON -> javascript object notation
console.log(student);

// let listOfStudent = [{...}, {...} , {...}]--> JSON array

let menu = ["Home", "About Us", "Contact", "Projects", "Courses"];

// array methods
// loop and array
menu.forEach(function (value, index) {
  console.log(value, index);
});

let ulMenu = document.querySelector("#menu-ul");
let liList = menu.map(function (value, index) {
  return `<li>${value}</li>`;
});

ulMenu.innerHTML = liList.join("");

console.log(student.name);

let myInfo = document.querySelector("#my-info");

myInfo.innerHTML = `I am <strong>${student.name}</strong> from <u>${student.organization}</u>`;

let a = 1;
let b = true;

if (a === b) {
  console.log("Yes");
} else {
  console.log("No");
}
