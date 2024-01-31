// 2 - Selecting an Element By Its ID/app.js
const myHeading = document.getElementById("heading");
const myButton = document.getElementById("button");
const myText = document.getElementById("input");

myButton.addEventListener("click", () => {
    myHeading.style.color = myText.value;

})
