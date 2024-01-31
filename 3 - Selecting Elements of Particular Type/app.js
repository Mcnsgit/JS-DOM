const orangeElements = document.getElementsByClassName('orange');
const notOrangeElements = document.getElementsByClassName('not-orange');
const listItems = document.getElementsByTagName('li');

    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "orange";
    }


    for (let i = 0; i < notOrangeElements.length; i++) {
        notOrangeElements[i].style.color = "red";
    }

