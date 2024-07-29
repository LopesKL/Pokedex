document.addEventListener('DOMContentLoaded', (event) => {
  let currentIndex = 1;
  let tipoSelecionado = 0;

  const selectElement = document.getElementById('typeSelect');
  selectElement.addEventListener('change', (event) => {
      tipoSelecionado = event.target.value;
      console.log(tipoSelecionado);
      currentIndex = 1;  // Reset the index
      document.getElementById('listaPokemon').innerHTML = '';  // Clear the list
      addItems();  // Add items based on the new selection
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
                  li.appendChild(nameType);

                  if (coiso.types.length > 1) {
                      const nameType2 = document.createElement('span');
                      let tipo02 = coiso.types[1].type.name;
                      nameType2.textContent = tipo02;
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
                  data.pokemon.slice(0, 12).forEach(pokeData => {
                      fetch(pokeData.pokemon.url)
                          .then(response => response.json())
                          .then(coiso => {
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
                              li.appendChild(nameType);

                              if (coiso.types.length > 1) {
                                  const nameType2 = document.createElement('span');
                                  let tipo02 = coiso.types[1].type.name;
                                  nameType2.textContent = tipo02;
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

  addItems();  // Initial call to populate the list
});