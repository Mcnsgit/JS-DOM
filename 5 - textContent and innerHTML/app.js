let placeholder = document.getElementById('placeholder');
let input = document.getElementById('input');
let submit = document.getElementById('submit');


submit.addEventListener('click', () => {  
    let newListItem = document.createElement('li');
    newListItem.textContent = input.value;
    console.log("input.value: ", input.value);
    list.appendChild(newListItem);
});
