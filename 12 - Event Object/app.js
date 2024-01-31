const button = document.getElementById('submit');
const input = document.getElementById('input');
const remove = document.getElementById('remove');
let list = document.getElementById('list');
let newListItem = document.createElement('li');

button.addEventListener('click', () => {
    let newListItem = document.createElement('li');
    let list = document.getElementsByTagName('ul')[0];
            
    newListItem.textContent = input.value;
    list.appendChild(newListItem);
    input.value = '';
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        let newListItem = document.createElement('li');
        newListItem.textContent = input.value;
        list.appendChild(newListItem);
        input.value = '';
    }
});


list.addEventListener('click', (event) => {
    event.target.style.textTransform = 'uppercase';
}); 
list.addEventListener('dblclick', (event) => {
    event.target.style.textTransform = 'lowercase';
});

remove.addEventListener('click', () => {
    let lastItem = document.querySelector('li:last-child');
    let list = document.getElementsByTagName('ul')[0];
    list.removeChild(lastItem); 
})





