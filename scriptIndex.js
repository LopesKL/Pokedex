document.addEventListener('DOMContentLoaded', (event) => {
    let tipoSelecionado = 0;
    let lista = 0;
    const limit = 12;  // Número de Pokémons carregados por vez

    const selectElement = document.getElementById('typeSelect');
    selectElement.addEventListener('change', (event) => {
        tipoSelecionado = event.target.value;
        document.getElementById('listaPokemon').innerHTML = '';
        lista = 0;  // Resetar a lista ao mudar o filtro
        addItems();
    });

    function addItems() {
        const ul = document.getElementById('listaPokemon');
        loadMoreButton.style.display = '';  // Mostrar o botão antes de carregar mais Pokémons

        if (tipoSelecionado == 0) {
            let url = `https://localhost:44373/api/pokemon`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    data.sort((a, b) => a.numeroPokedex - b.numeroPokedex);
                    const totalData = data.length;  // Tamanho total dos dados

                    // Certificar-se de que `lista` não excede o tamanho de `data`
                    for (var i = lista; i < lista + limit && i < totalData; i++) {
                        var nome = data[i].name;
                        var numeroPokedex = data[i].numeroPokedex;
                        var tipo01 = data[i].firstType;
                        var sprite = data[i].frontSpriteUrl;

                        const li = document.createElement('li');
                        li.className = "margem";

                        const link = document.createElement('a');
                        link.href = "#";
                        link.className = "link-offset-2 link-underline link-underline-opacity-0 text-dark";

                        const img = document.createElement('img');
                        img.src = sprite;
                        link.appendChild(img);

                        const numberSpan = document.createElement('div');
                        numberSpan.textContent = `Nº ${numeroPokedex}`;
                        numberSpan.className = "text-start text-muted";
                        link.appendChild(numberSpan);

                        const nameSpan = document.createElement('div');
                        nameSpan.textContent = nome;
                        nameSpan.className = "text-start fw-bold";
                        link.appendChild(nameSpan);

                        const nameType = document.createElement('span');
                        nameType.textContent = tipo01;
                        nameType.className = `${tipo01}`;
                        link.appendChild(nameType);

                        if (data[i].secondType) {
                            const nameType2 = document.createElement('span');
                            let tipo02 = data[i].secondType;
                            nameType2.textContent = tipo02;
                            nameType2.className = `${tipo02}`;
                            link.appendChild(nameType2);
                        }

                        li.appendChild(link);
                        ul.appendChild(li);
                    }
                    lista += limit;  // Incrementar a lista

                    // Esconder o botão se todos os Pokémons foram carregados ou se `lista` exceder o número total de Pokémons
                    if (lista >= totalData ) {
                        loadMoreButton.style.display = 'none';
                    }
                });

        } else if (tipoSelecionado != 0) {
            loadMoreButton.style.display = 'none';  // Esconde o botão ao filtrar por tipo
            let url = `https://localhost:44373/api/pokemon`;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                lista = 0;  // Resetar a lista ao mudar o tipo selecionado
                let pokemonCarregado = false;
                const totalData = data.length;  // Tamanho total dos dados
                data.sort((a, b) => a.numeroPokedex - b.numeroPokedex);

                    for (var i = lista; i < lista + 200 && i < totalData; i++) {
                        var nome = data[i].name;
                        var numeroPokedex = data[i].numeroPokedex;
                        var tipo01 = data[i].firstType;
                        var sprite = data[i].frontSpriteUrl;
                        var tipo02 = data[i].secondType;

                        if (tipo01 == tipoSelecionado || tipo02 == tipoSelecionado) {
                            pokemonCarregado = true;

                            const li = document.createElement('li');
                            li.className = "margem";

                            const link = document.createElement('a');
                            link.href = "#";
                            link.className = "link-offset-2 link-underline link-underline-opacity-0 text-dark";

                            const img = document.createElement('img');
                            img.src = sprite;
                            link.appendChild(img);

                            const numberSpan = document.createElement('div');
                            numberSpan.textContent = `Nº ${numeroPokedex}`;
                            numberSpan.className = "text-start text-muted";
                            link.appendChild(numberSpan);

                            const nameSpan = document.createElement('div');
                            nameSpan.textContent = nome;
                            nameSpan.className = "text-start fw-bold";
                            link.appendChild(nameSpan);

                            const nameType = document.createElement('span');
                            nameType.textContent = tipo01;
                            nameType.className = `${tipo01}`;
                            link.appendChild(nameType);

                            if (data[i].secondType) {
                                const nameType2 = document.createElement('span');
                                let tipo02 = data[i].secondType;
                                nameType2.textContent = tipo02;
                                nameType2.className = `${tipo02}`;
                                link.appendChild(nameType2);
                            }

                            li.appendChild(link);
                            ul.appendChild(li);
                        }
                    }

                    // Caso não haja mais Pokémon para carregar, esconder o botão
                    if (!pokemonCarregado) {
                        loadMoreButton.style.display = 'none';
                    }
                });
        }
    }

    const loadMoreButton = document.getElementById('botaoCarregar');
    loadMoreButton.addEventListener('click', addItems);
    addItems();
});






//Banner search bar


document.getElementById('closeBannerBtn').addEventListener('click', function () {
    document.getElementById('banner').style.display = 'none';
});


document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const pesquisa = document.getElementById('nomePokemon').value;


    console.log(pesquisa);

    document.getElementById('banner').style.display = 'block';

    fetch('https://localhost:44373/api/pokemon')
        .then(response => response.json())
        .then(data => {
            for (let e = 0; e < 100; e++) {
                if (data[e] && (data[e].name.toLowerCase() == pesquisa || data[e].numeroPokedex.toString() == pesquisa)) {                    
                    document.getElementById("nomePokemonBanner").textContent = data[e].name;
                    document.getElementById("spriteFrontBanner").src = data[e].frontSpriteUrl;
                    document.getElementById("spriteBackBanner").src = data[e].backSpriteUrl;
                    document.getElementById("spriteFrontShinyBanner").src = data[e].frontShinySpriteUrl;
                    document.getElementById("spriteBackShinyBanner").src = data[e].backShinySpriteUrl;
                    document.getElementById("numeroPokedexBanner").textContent = data[e].id;
                    document.getElementById("tipo01Banner").textContent = data[e].firstType;
                    document.getElementById("tipo01Banner").className = data[e].firstType;

                    if (data[e].secondType != null) {
                        document.getElementById("tipo02Banner").textContent = data[e].secondType;
                        document.getElementById("tipo02Banner").className = data[e].secondType;
                    } else {
                        // Caso não haja um segundo tipo, limpar o conteúdo
                        document.getElementById("tipo02Banner").textContent = '';
                        document.getElementById("tipo02Banner").className = '';
                    }
                    break; // Parar o loop após encontrar o Pokémon correto
                }
            }
        })
});
