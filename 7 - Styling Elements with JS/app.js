let image = document.getElementById('cat');
let button = document.getElementById('submit');

button.addEventListener('click', () => {
    console.log("image hidden: ", image.style.display);
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        console.log("image hidden: ", image.style.display);
        image.style.display = 'none';
    }
    
})


