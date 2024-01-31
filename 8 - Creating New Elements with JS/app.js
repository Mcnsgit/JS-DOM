document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const submit = document.getElementById('submit');
    let list = document.getElementById('list'); 
    const showHideBtn = document.getElementById('showhide-btn');

    submit.addEventListener('click', () => {
        let newListItem = document.createElement('li');
        newListItem.textContent = input.value;
        list.appendChild(newListItem);
        input.value = '';
    });

    showHideBtn.addEventListener('click', () => {
        if (list.style.display === 'none' || list.style.display === '') {
            list.style.display = 'block';
            showHideBtn.textContent = 'Hide List';
        } else {
            list.style.display = 'none';
            showHideBtn.textContent = 'Show List';
        }
    });
});

