
document.addEventListener('DOMContentLoaded', (event) => {
  let currentIndex = 1;
  let tipoSelecionado = 0;
  let currentTypeIndex = 0;
  let typePokemonList = [];

  const selectElement = document.getElementById('typeSelect');
  selectElement.addEventListener('change', (event) => {
      tipoSelecionado = event.target.value;
      console.log(tipoSelecionado);
      currentIndex = 1;
      currentTypeIndex = 0; 
      document.getElementById('listaPokemon').innerHTML = '';
      typePokemonList = [];
      addItems();  
  });

  function addItems() {
      const ul = document.getElementById('listaPokemon');
      const promises = [];

      if (tipoSelecionado == 0) {
          for (let i = 0; i < 12; i++) {
              let listaGeral = `pokemon/${currentIndex}`;
              currentIndex++;
              let url = `https://pokeapi.co/api/v2/${listaGeral}`;
              promises.push(fetch(url).then(response => response.json()));
          }

          Promise.all(promises).then(results => {
              results.forEach(coiso => {
                  var nome = coiso.name;
                  var numeroPokedex = coiso.id;
                  var tipo01 = coiso.types[0].type.name;
                  var sprite = coiso.sprites.front_default;

                  const li = document.createElement('li');
                  li.className = "margem";

                  const img = document.createElement('img');
                  img.src = sprite;
                  li.appendChild(img);

                  const numberSpan = document.createElement('div');
                  numberSpan.textContent = `Nº ${numeroPokedex}`;
                  numberSpan.className = "text-start text-muted";
                  li.appendChild(numberSpan);

                  const nameSpan = document.createElement('div');
                  nameSpan.textContent = nome;
                  nameSpan.className = "text-start fw-bold";
                  li.appendChild(nameSpan);

                  const nameType = document.createElement('span');
                  nameType.textContent = tipo01;
                  nameType.className = `${tipo01}`;
                  li.appendChild(nameType);

                  if (coiso.types.length > 1) {
                      const nameType2 = document.createElement('span');
                      let tipo02 = coiso.types[1].type.name;
                      nameType2.textContent = tipo02;
                      nameType2.className = `${tipo02}`;
                      li.appendChild(nameType2);
                  }

                  ul.appendChild(li);
              });
          });
      } else {
          let url = `https://pokeapi.co/api/v2/type/${tipoSelecionado}`;
          fetch(url)
              .then(response => response.json())
              .then(data => {
                  if (typePokemonList.length === 0) {
                      typePokemonList = data.pokemon;
                  }

                  const typePromises = [];

                  for (let i = 0; i < 12; i++) {
                      if (currentTypeIndex >= typePokemonList.length) break;
                      let pokeData = typePokemonList[currentTypeIndex].pokemon;
                      currentTypeIndex++;

                      typePromises.push(
                          fetch(pokeData.url)
                              .then(response => response.json())
                      );
                  }

                  Promise.all(typePromises).then(results => {
                      results.forEach(coiso => {
                          var nome = coiso.name;
                          var numeroPokedex = coiso.id;
                          var tipo01 = coiso.types[0].type.name;
                          var sprite = coiso.sprites.front_default;

                          const li = document.createElement('li');
                          li.className = "margem";

                          const img = document.createElement('img');
                          img.src = sprite;
                          li.appendChild(img);

                          const numberSpan = document.createElement('div');
                          numberSpan.textContent = `Nº ${numeroPokedex}`;
                          numberSpan.className = "text-start text-muted";
                          li.appendChild(numberSpan);

                          const nameSpan = document.createElement('div');
                          nameSpan.textContent = nome;
                          nameSpan.className = "text-start fw-bold";
                          li.appendChild(nameSpan);


                          const nameType = document.createElement('span');
                          nameType.textContent = tipo01;
                          nameType.className = `${tipo01}`;
                          li.appendChild(nameType);

                          if (coiso.types.length > 1) {
                              const nameType2 = document.createElement('span');
                              let tipo02 = coiso.types[1].type.name;
                              nameType2.textContent = tipo02;
                              nameType2.className = `${tipo02}`;
                              li.appendChild(nameType2);
                          }

                          ul.appendChild(li);
                      });
                  });
              });
      }
  }

  const loadMoreButton = document.getElementById('botaoCarregar');
  loadMoreButton.addEventListener('click', addItems);

  addItems();  
});


//Banner search bar


document.getElementById('closeBannerBtn').addEventListener('click', function() {
    document.getElementById('banner').style.display = 'none';
});

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('banner').style.display = 'block';

    var nome = document.getElementById('nomePokemon').value;

    let url = `https://pokeapi.co/api/v2/pokemon/${nome}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById("nomePokemonBanner").textContent = data.name;
                document.getElementById("spriteFrontBanner").src = data.sprites.front_default;
                document.getElementById("spriteBackBanner").src = data.sprites.back_default;
                document.getElementById("spriteFrontShinyBanner").src = data.sprites.front_shiny;
                document.getElementById("spriteBackShinyBanner").src = data.sprites.back_shiny;
                document.getElementById("nomePokemonBanner").textContent = data.name;
                document.getElementById("numeroPokedexBanner").textContent = data.id;
                document.getElementById("tipo01Banner").textContent = data.types[0].type.name;
                document.getElementById("tipo01Banner").className = data.types[0].type.name
                
                
                if (data.types.length > 1) {
                document.getElementById("tipo02Banner").textContent = data.types[1].type.name;
                document.getElementById("tipo02Banner").className = data.types[1].type.name
                } else {
                    document.getElementById("tipo02Banner").textContent = "";
                    document.getElementById("tipo02Banner").className = "";
                }
            })
});