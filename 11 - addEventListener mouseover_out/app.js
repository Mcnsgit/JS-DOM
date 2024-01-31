document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const submit = document.getElementById('submit');
    const remove = document.getElementById('remove');

    submit.addEventListener('click', () => {
        let newListItem = document.createElement('li');
        let list = document.getElementsByTagName('ul')[0];
        newListItem.textContent = input.value;
        list.appendChild(newListItem)
        input.value = '';

        for (let listItem of collection) {
            listItem.addEventListener('mouseover', () => {
                listItem.style.textTransform = 'uppercase';
            });
            listItem.addEventListener('mouseout', () => {
                listItem.style.textTransform = 'lowercase';
            });
        }
    });

    remove.addEventListener('click', () => {
        let lastItem = document.querySelector('li:last-child');
        let list = document.getElementsByTagName('ul')[0];
        list.removeChild(lastItem); 
    })

    const collection = document.getElementsByTagName('li');
        for (let listItem of collection) {
            listItem.addEventListener('mouseover', () => {
                listItem.style.textTransform = 'uppercase';
            });
            listItem.addEventListener('mouseout', () => {
                listItem.style.textTransform = 'lowercase';
            });
        }
    
});


