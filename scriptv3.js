let inicio = "pokemon?limit=100000&offset=0";
let url = `https://pokeapi.co/api/v2/${inicio}`;

function tipoPokemonBotao(buttonId) {
  console.log("Button ID: " + buttonId);
}

document.addEventListener("DOMContentLoaded", (event) => {
  let nextNumber1 = 1;

  function addItems() {
    const ul = document.getElementById("listaPokemon");
    for (let i = 0; i < 4; i++) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let url2 = data.results[i].url;

          fetch(url2)
            .then(response => response.json())
            .then( coiso =>{

                const li = document.createElement('li');

                const img = document.createElement('img');
                img.src = coiso.sprites.front_default;
                li.appendChild(img);
        
                const numberSpan = document.createElement('span');
                numberSpan.textContent = `Nº ${coiso.id}`;
                li.appendChild(numberSpan);
        
                const nameSpan = document.createElement('span');
                nameSpan.textContent = coiso.name;
                li.appendChild(nameSpan);
        
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
        
                ul.appendChild(li);

            })
            
        });
    }
  }

  addItems();

  const loadMoreButton = document.getElementById("botaoCarregar");
  loadMoreButton.addEventListener("click", addItems);
});
