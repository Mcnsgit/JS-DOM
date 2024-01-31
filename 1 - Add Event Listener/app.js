let myHeading = document.getElementById("heading");
myHeading.addEventListener('click', () => {
    console.log("clicked");
    if (myHeading.style.color === "green"
        && myHeading.style.backgroundColor === "orange") {
        myHeading.style.color = "black"
        myHeading.style.backgroundColor = "white";
    } else {
        myHeading.style.color = "green";
        myHeading.style.backgroundColor = "orange";
    }

});





// // change the color of the heading
// document.getElementById("heading").style.color = "green"
// // change the background color of the heading
// document.getElementById("heading").style.backgroundColor = "orange"

