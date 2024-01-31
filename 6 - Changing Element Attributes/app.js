document.addEventListener('DOMContentLoaded', function() {
    let image = document.getElementById('image');
    let input = document.getElementById('input');


    submit.addEventListener('click', () => {
        console.log("Button clicked.  Input value: ", input.value);
        image.src = input.value;
        })
    }
);

