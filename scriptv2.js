document.addEventListener('DOMContentLoaded', (event) => {
    let nextNumber = 1; 

     function addItems() {
        const ul = document.getElementById('item-list');
        for (let i = 0; i < 4; i++) {
            const li = document.createElement('li');
            li.textContent = `Pokemon ${nextNumber}`;
            ul.appendChild(li);
            nextNumber += 4; 
        }
    }

    addItems();

    const loadMoreButton = document.getElementById('botaoCarregar');
    loadMoreButton.addEventListener('click', addItems);
});



document.addEventListener('DOMContentLoaded', (event) => {
    let nextNumber = 2; 

     function addItems() {
        const ul = document.getElementById('item-list2');
        for (let i = 2; i < 6; i++) {
            const li = document.createElement('li');
            li.textContent = `Pokemon ${nextNumber}`;
            ul.appendChild(li);
            nextNumber += 4; 
        }
    }

    addItems();

    const loadMoreButton = document.getElementById('botaoCarregar');
    loadMoreButton.addEventListener('click', addItems);
});



document.addEventListener('DOMContentLoaded', (event) => {
    let nextNumber = 3; 

     function addItems() {
        const ul = document.getElementById('item-list3');
        for (let i = 3; i < 7; i++) {
            const li = document.createElement('li');
            li.textContent = `Pokemon ${nextNumber}`;
            ul.appendChild(li);
            nextNumber += 4; 
        }
    }

    addItems();

    const loadMoreButton = document.getElementById('botaoCarregar');
    loadMoreButton.addEventListener('click', addItems);
});



document.addEventListener('DOMContentLoaded', (event) => {
    let nextNumber = 4; 

     function addItems() {
        const ul = document.getElementById('item-list4');
        for (let i = 4; i < 8; i++) {
            const li = document.createElement('li');
            li.textContent = `Pokemon ${nextNumber}`;
            ul.appendChild(li);
            nextNumber += 4; 
        }
    }

    addItems();

    const loadMoreButton = document.getElementById('botaoCarregar');
    loadMoreButton.addEventListener('click', addItems);
});

