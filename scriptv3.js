document.addEventListener('DOMContentLoaded', (event) => {

  let currentIndex = 1;

  function addItems() {
    const ul = document.getElementById('listaPokemon');
    const promises = [];

      for (let i = 0; i < 12; i++) {

        let listaGeral = `pokemon/${currentIndex}`;
        currentIndex++;

        var urlSelecionada

        urlSelecionada = listaGeral

        let url = `https://pokeapi.co/api/v2/${urlSelecionada}`;
        promises.push(fetch(url).then(response => response.json()));

      }
    

    Promise.all(promises).then(results => {
      results.forEach(coiso => {
          var nome = coiso.name

          var numeroPokedex = coiso.id;
  
          var tipo01 = coiso.types[0].type.name

        const li = document.createElement('li');
        li.className = "margem"

        const img = document.createElement('img');
        img.src = coiso.sprites.front_default;
        li.appendChild(img);

        const numberSpan = document.createElement('div');
        numberSpan.textContent = `Nº ${numeroPokedex}`;
        numberSpan.className = "text-start text-muted"
        li.appendChild(numberSpan);

        const nameSpan = document.createElement('div');
        nameSpan.textContent = nome;
        nameSpan.className = "text-start fw-bold"
        li.appendChild(nameSpan);

        const nameType = document.createElement('span');
        nameType.textContent = tipo01;
        li.appendChild(nameType);

        if (coiso.types.length > 1) {
          const nameType2 = document.createElement('span');
          let tipo02 = coiso.types[1].type.name
          nameType2.textContent = tipo02;

          li.appendChild(nameType2);
        }

        ul.appendChild(li);
      });
    });
  }

  addItems();

  const loadMoreButton = document.getElementById('botaoCarregar');
  loadMoreButton.addEventListener('click', addItems);
});