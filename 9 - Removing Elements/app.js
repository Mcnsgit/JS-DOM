document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const submit = document.getElementById('submit');
    let list = document.getElementById('list'); 
    const remove = document.getElementById('remove');

    submit.addEventListener('click', () => {
        let newListItem = document.createElement('li');
        newListItem.textContent = input.value;
        list.appendChild(newListItem);
        input.value = '';
    });

    remove.addEventListener('click', () => {
        let lastItem = document.querySelector('li:last-child');
        let list = document.getElementsByTagName('ul')[0];
        list.removeChild(lastItem); 
    })
    
});


