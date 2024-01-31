// var listItems = document.querySelector('.list-parent').children;
// for (var i = 0; i < listItems.length; i++) {
//     if (i % 2 === 0) {
//         listItems[i].style.color = 'lightgreen';
//     }
// }









const listItems = document.querySelector('.list-parent').children;
const rainbowColours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red', 'orange', 'yellow'];
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = rainbowColours[i % rainbowColours.length];
}