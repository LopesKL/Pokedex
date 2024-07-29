let inicio = ("type/3");

let url = `https://pokeapi.co/api/v2/${inicio}`

let nome = document.getElementById("nomePokemon");

let pesquisaNome = `pokemon/${nome}`;


function tipoPokemonBotao(buttonId) {
    console.log("Button ID: " + buttonId);
}





document.addEventListener('DOMContentLoaded', (event) => {
    let nextNumber2 = 2; 

     function addItems() {
        const ul = document.getElementById('item-list2');
        for (let i = 2; i < 6; i++) {
            (function(currentNumber) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        currentNumber-=1
                        let url2 = data.results[currentNumber].url;
                        fetch(url2)
                            .then(response => response.json())
                            .then(coiso => {
                                const liImage = document.createElement('li');
                                const img = document.createElement('img');
                                img.id = 'spriteFront';
                                img.src = coiso.sprites.front_default;
                                liImage.appendChild(img);
                                ul.appendChild(liImage);

                                const liNumber = document.createElement('li');
                                liNumber.className = 'text-start text-muted';
                                liNumber.innerHTML = `<span> n° ${coiso.id} </span>`;
                                ul.appendChild(liNumber);

                                const liName = document.createElement('li');
                                liName.className = 'text-start fw-bold';
                                liName.textContent = coiso.name;
                                ul.appendChild(liName);

                                const ulTypes = document.createElement('ul');
                                ulTypes.className = 'list-group list-group-horizontal';
                                ul.appendChild(ulTypes);

                                const types = [{ text: coiso.types[0].type.name }];
                                if (coiso.types.length > 1) {
                                    types.push({ text: coiso.types[1].type.name });
                                }

                                types.forEach(type => {
                                    const li = document.createElement('li');
                                    li.className = 'list-group-item';
                                    li.textContent = type.text;
                                    ulTypes.appendChild(li);
                                });
                            });
                    });
            })(nextNumber2);
            nextNumber2 += 4;
        }
    }

    addItems();

    const loadMoreButton = document.getElementById('botaoCarregar');
    loadMoreButton.addEventListener('click', addItems);
});






document.addEventListener('DOMContentLoaded', (event) => {
    let nextNumber3 = 3;


    function addItems() {
        const ul = document.getElementById('item-list3');
        let i = 0;
        while (i < 4) {
            (function(currentNumber) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        currentNumber -= 1;
                        let url2 = data.results[currentNumber].url;
                        fetch(url2)
                            .then(response => response.json())
                            .then(coiso => {
                                const liImage = document.createElement('li');
                                const img = document.createElement('img');
                                img.id = 'spriteFront';
                                img.src = coiso.sprites.front_shiny;
                                liImage.appendChild(img);
                                ul.appendChild(liImage);

                                const liNumber = document.createElement('li');
                                liNumber.className = 'text-start text-muted';
                                liNumber.innerHTML = `<span> n° ${coiso.id} </span>`;
                                ul.appendChild(liNumber);

                                const liName = document.createElement('li');
                                liName.className = 'text-start fw-bold';
                                liName.textContent = coiso.name;
                                ul.appendChild(liName);

                                const ulTypes = document.createElement('ul');
                                ulTypes.className = 'list-group list-group-horizontal';
                                ul.appendChild(ulTypes);

                                const types = [{ text: coiso.types[0].type.name }];
                                if (coiso.types.length > 1) {
                                    types.push({ text: coiso.types[1].type.name });
                                }

                                types.forEach(type => {
                                    const li = document.createElement('li');
                                    li.className = 'list-group-item';
                                    li.textContent = type.text;
                                    ulTypes.appendChild(li);
                                });
                            });
                    });
            })(nextNumber3);
            nextNumber3 += 4;
            i++;
        }
    }

    addItems();

    const loadMoreButton = document.getElementById('botaoCarregar');
    loadMoreButton.addEventListener('click', addItems);
});



document.addEventListener('DOMContentLoaded', (event) => {
    let nextNumber4 = 4; 

     function addItems() {
        const ul = document.getElementById('item-list4');
        for (let i = 4; i < 8; i++) {
       
            (function(currentNumber) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        currentNumber-=1
                        let url2 = data.results[currentNumber].url;
                        fetch(url2)
                            .then(response => response.json())
                            .then(coiso => {
                                const liImage = document.createElement('li');
                                const img = document.createElement('img');
                                img.id = 'spriteFront';
                                img.src = coiso.sprites.front_default;
                                liImage.appendChild(img);
                                ul.appendChild(liImage);

                                const liNumber = document.createElement('li');
                                liNumber.className = 'text-start text-muted';
                                liNumber.innerHTML = `<span> n° ${coiso.id} </span>`;
                                ul.appendChild(liNumber);

                                const liName = document.createElement('li');
                                liName.className = 'text-start fw-bold';
                                liName.textContent = coiso.name;
                                ul.appendChild(liName);

                                const ulTypes = document.createElement('ul');
                                ulTypes.className = 'list-group list-group-horizontal';
                                ul.appendChild(ulTypes);

                                const types = [{ text: coiso.types[0].type.name }];
                                if (coiso.types.length > 1) {
                                    types.push({ text: coiso.types[1].type.name });
                                }

                                types.forEach(type => {
                                    const li = document.createElement('li');
                                    li.className = 'list-group-item';
                                    li.textContent = type.text;
                                    ulTypes.appendChild(li);
                                });
                            });
                    });
            })(nextNumber4);
            nextNumber4 += 4;
        }
    }

    addItems();

    const loadMoreButton = document.getElementById('botaoCarregar');
    loadMoreButton.addEventListener('click', addItems);
});