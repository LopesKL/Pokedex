



document.addEventListener('DOMContentLoaded', (event) => {
  let currentIndex = 1;

  function addItems() {
      const ul = document.getElementById('listaPokemon');
      const promises = [];

      for (let i = 0; i < 12; i++) {
          let url2 = `https://pokeapi.co/api/v2/pokemon/${currentIndex}`;
          promises.push(fetch(url2).then(response => response.json()));
          currentIndex++;
      }

      Promise.all(promises).then(results => {
          results.forEach(coiso => {
              const li = document.createElement('li');
              li.className = "margem"

              const img = document.createElement('img');
              img.src = coiso.sprites.front_default;
              li.appendChild(img);

              const numberSpan = document.createElement('div');
              numberSpan.textContent = `Nº ${coiso.id}`;
              numberSpan.className = "text-start text-muted"
              li.appendChild(numberSpan);

              const nameSpan = document.createElement('div');
              nameSpan.textContent = coiso.name;
              nameSpan.className = "text-start fw-bold"
              li.appendChild(nameSpan);

              const nameType = document.createElement('span');
              nameType.textContent = coiso.types[0].type.name;
              li.appendChild(nameType);

              if(coiso.types.length > 1) {
                const nameType2 =  document.createElement('span');
                nameType2.textContent = coiso.types[1].type.name;

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
