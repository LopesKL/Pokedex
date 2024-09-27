document.addEventListener('DOMContentLoaded', (event) => {
    let tipoSelecionado = 0;
    let lista = 0;
    const limit = 12; 

    const selectElement = document.getElementById('typeSelect');
    selectElement.addEventListener('change', (event) => {
        tipoSelecionado = event.target.value;
        document.getElementById('listaPokemon').innerHTML = '';
        lista = 0;  
        addItems();
    });

    function addItems() {
        const ul = document.getElementById('listaPokemon');

        if (tipoSelecionado == 0) {
            let url = `https://localhost:44373/api/pokemon`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const totalData = data.length;  

                    for (var i = lista; i < lista + limit && i < totalData; i++) {
                        var nome = data[i].name;
                        var numeroPokedex = data[i].numeroPokedex;
                        var sprite = data[i].frontSpriteUrl;
                        var spriteTrazeira = data[i].backSpriteUrl
                        var spriteShiny = data[i].frontShinySpriteUrl
                        var spriteTrazeiraShinyt = data[i].backShinySpriteUrl
                        var tipo01 = data[i].firstType
                        var tipo02 = data[i].secondType

                        const li = document.createElement('div');
                        li.className = "margem2 row";

                        const DivImagem = document.createElement('div');
                        DivImagem.className = "col-4 text-center ";

                        const Imagem = document.createElement('img');
                        Imagem.className = "text-center";
                        Imagem.src = sprite;

                        DivImagem.appendChild(Imagem);

                        const DivId = document.createElement('div');
                        DivId.className = "col-3 text-center ";

                        const Id = document.createElement('span');
                        Id.className = "text-center ";
                        Id.textContent = numeroPokedex;

                        DivId.appendChild(Id);

                        const DivNome = document.createElement('div');
                        DivNome.className = "col-3 text-center ";

                        const Nome = document.createElement('span');
                        Nome.className = "text-center";
                        Nome.textContent = nome;

                        DivNome.appendChild(Nome);

                        const DivEditar = document.createElement('div');
                        DivEditar.className = "col-1 text-center ";

                        const Editar = document.createElement('button');
                        Editar.numeroPokedex = "btneditar";
                        Editar.className = "btn btn-primary";
                        Editar.textContent = "Editar";

                        Editar.addEventListener('click', (function (idEditar) {
                            return function () {
                                localStorage.setItem('idEditar', idEditar);
                                window.location.href = 'editar.html';
                                EditarCoisa();
                            };
                        })(numeroPokedex));

                        DivEditar.appendChild(Editar);

                        const DivExcluir = document.createElement('div');
                        DivExcluir.className = "col-1 text-center ";

                        const Excluir = document.createElement('button');
                        Excluir.numeroPokedex = "btnexcluir";
                        Excluir.className = "btn btn-danger";
                        Excluir.textContent = "Excluir";

                        Excluir.setAttribute('data-pokedex', numeroPokedex);

                        Excluir.addEventListener('click', function () {
                            const numeroPokedex = this.getAttribute('data-pokedex');

                            console.log("Número da Pokédex:", numeroPokedex);

                            fetch("https://localhost:44373/api/pokemon")
                                .then(response => response.json())
                                .then(data => {

                                    for (i = 0; i < 151; i++) {
                                        if (data[i].numeroPokedex == numeroPokedex) {

                                            fetch("https://localhost:44373/api/pokemon", {
                                                method: 'DELETE',
                                                headers: {
                                                    'Content-Type': 'application/json'
                                                },
                                                body: JSON.stringify({
                                                    id: data[i].id,
                                                    numeroPokedex: numeroPokedex,
                                                    name: nome,
                                                    firstType: tipo01,
                                                    secondType: tipo02,
                                                    backSpriteUrl: spriteTrazeira,
                                                    frontSpriteUrl: sprite,
                                                    backShinySpriteUrl: spriteTrazeiraShinyt,
                                                    frontShinySpriteUrl: spriteShiny
                                                })
                                            })
                                                .then(response => {

                                                    li.remove();
                                                    alert('Pokémon excluído com sucesso!');

                                                })
                                                .catch(error => console.error('Erro ao excluir o Pokémon:', error));
                                        }
                                    }

                                })
                                .catch(error => console.error('Erro ao buscar Pokémons:', error));
                        });
                        DivExcluir.appendChild(Excluir);

                        li.appendChild(DivImagem);
                        li.appendChild(DivId);
                        li.appendChild(DivNome);
                        li.appendChild(DivEditar);
                        li.appendChild(DivExcluir);

                        ul.appendChild(li);

                    }
                    lista += limit;

                    if (lista >= totalData) {
                        loadMoreButton.style.display = 'none';
                    }
                });

        } else if (tipoSelecionado != 0) {

            let url = `https://localhost:44373/api/pokemon`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    lista = 0;
                    loadMoreButton.style.display = 'none';

                    for (var i = lista; i < lista + 151; i++) {

                        var tipo01 = data[i].firstType
                        var tipo02 = data[i].secondType

                        if (data[i].secondType != null) { tipo02 == data[i].secondType };

                        if (tipo01 == tipoSelecionado || tipo02 == tipoSelecionado) {

                            var nome = data[i].name;
                            var numeroPokedex = data[i].numeroPokedex;
                            var sprite = data[i].frontSpriteUrl;
                            var spriteTrazeira = data[i].backSpriteUrl
                            var spriteShiny = data[i].frontShinySpriteUrl
                            var spriteTrazeiraShinyt = data[i].backShinySpriteUrl

                            const li = document.createElement('div');
                            li.className = "margem2 row";

                            const DivImagem = document.createElement('div');
                            DivImagem.className = "col-4 text-center ";

                            const Imagem = document.createElement('img');
                            Imagem.className = "text-center";
                            Imagem.src = sprite;

                            DivImagem.appendChild(Imagem);

                            const DivId = document.createElement('div');
                            DivId.className = "col-3 text-center ";

                            const Id = document.createElement('span');
                            Id.className = "text-center ";
                            Id.textContent = numeroPokedex;

                            DivId.appendChild(Id);

                            const DivNome = document.createElement('div');
                            DivNome.className = "col-3 text-center ";

                            const Nome = document.createElement('span');
                            Nome.className = "text-center";
                            Nome.textContent = nome;

                            DivNome.appendChild(Nome);

                            const DivEditar = document.createElement('div');
                            DivEditar.className = "col-1 text-center ";

                            const Editar = document.createElement('button');
                            Editar.numeroPokedex = "btneditar";
                            Editar.className = "btn btn-primary";
                            Editar.textContent = "Editar";

                            Editar.addEventListener('click', (function (idEditar) {
                                return function () {
                                    localStorage.setItem('idEditar', idEditar);
                                    window.location.href = 'editar.html';
                                    EditarCoisa();
                                };
                            })(numeroPokedex));

                            DivEditar.appendChild(Editar);

                            const DivExcluir = document.createElement('div');
                            DivExcluir.className = "col-1 text-center ";

                            const Excluir = document.createElement('button');
                            Excluir.numeroPokedex = "btnexcluir";
                            Excluir.className = "btn btn-danger";
                            Excluir.textContent = "Excluir";

                            Excluir.setAttribute('data-pokedex', numeroPokedex);

                            Excluir.addEventListener('click', function () {
                                const numeroPokedex = this.getAttribute('data-pokedex');

                                console.log("Número da Pokédex:", numeroPokedex);

                                fetch("https://localhost:44373/api/pokemon")
                                    .then(response => response.json())
                                    .then(data => {

                                        for (i = 0; i < 200; i++) {
                                            if (data[i].numeroPokedex == numeroPokedex) {

                                                fetch("https://localhost:44373/api/pokemon", {
                                                    method: 'DELETE',
                                                    headers: {
                                                        'Content-Type': 'application/json'
                                                    },
                                                    body: JSON.stringify({
                                                        id: data[i].id,
                                                        numeroPokedex: numeroPokedex,
                                                        name: nome,
                                                        firstType: tipo01,
                                                        secondType: tipo02,
                                                        backSpriteUrl: spriteTrazeira,
                                                        frontSpriteUrl: sprite,
                                                        backShinySpriteUrl: spriteTrazeiraShinyt,
                                                        frontShinySpriteUrl: spriteShiny
                                                    })
                                                })
                                                    .then(response => {

                                                        li.remove();
                                                        alert('Pokémon excluído com sucesso!');

                                                    })
                                                    .catch(error => console.error('Erro ao excluir o Pokémon:', error));
                                            }
                                        }
                                    })
                                    .catch(error => console.error('Erro ao buscar Pokémons:', error));
                            });
                            DivExcluir.appendChild(Excluir);

                            li.appendChild(DivImagem);
                            li.appendChild(DivId);
                            li.appendChild(DivNome);
                            li.appendChild(DivEditar);
                            li.appendChild(DivExcluir);

                            ul.appendChild(li);

                        }
                    }
                    if (!pokemonCarregado) {
                        loadMoreButton.style.display = 'none';
                    }

                })
        }
    }

    const loadMoreButton = document.getElementById('botaoCarregar');
    loadMoreButton.addEventListener('click', addItems);
    addItems();

});

//Editar
function EditarCoisa() {
    // Recuperar o ID armazenado
    event.preventDefault();
    const idEditar = parseInt(localStorage.getItem('idEditar'), 10);
    let url = `https://localhost:44373/api/pokemon`;
    fetch(url)
        .then(response => response.json())
        .then(data => {

            const pokemon = data.find(p => p.numeroPokedex == idEditar);
            console.log("Id Editar: " + idEditar)
            if (pokemon) {
                document.getElementById('id').value = pokemon.id;
                document.getElementById('PokedexNumber').value = pokemon.numeroPokedex;
                document.getElementById('PokemonName').value = pokemon.name;
                document.getElementById('FrontSprite').value = pokemon.frontSpriteUrl;
                document.getElementById('BackSprite').value = pokemon.backSpriteUrl;
                document.getElementById('FrontShinySprite').value = pokemon.frontShinySpriteUrl;
                document.getElementById('BackShinySprite').value = pokemon.backShinySpriteUrl;
                document.getElementById('Type01').value = pokemon.firstType;
                document.getElementById('Type02').value = pokemon.secondType;
            } else {
                console.error('Pokémon não encontrado');
            }
        })
        .catch(error => console.error('Erro ao buscar dados do Pokémon:', error));
}


document.getElementById('FormInfotmations').addEventListener('submit', (event) => {
    event.preventDefault();

    const idPokemon = document.getElementById('PokedexNumber').value;

    console.log("idPokemon: " + idPokemon)

    let url = `https://localhost:44373/api/pokemon`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const pokemonEncontrado = data.find(p => p.numeroPokedex == idPokemon);

            console.log(pokemonEncontrado.numeroPokedex)

            if (pokemonEncontrado.numeroPokedex == idPokemon) {
                fetch(`https://localhost:44373/api/pokemon`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: document.getElementById('id').value,
                        numeroPokedex: document.getElementById('PokedexNumber').value,
                        name: document.getElementById('PokemonName').value,
                        frontSpriteUrl: document.getElementById('FrontSprite').value,
                        backSpriteUrl: document.getElementById('BackSprite').value,
                        frontShinySpriteUrl: document.getElementById('FrontShinySprite').value,
                        backShinySpriteUrl: document.getElementById('BackShinySprite').value,
                        firstType: document.getElementById('Type01').value,
                        secondType: document.getElementById('Type02').value
                    })
                })
                    .catch(error => console.error('Erro ao atualizar Pokémon:', error));

                    alert("Pokemon Editado")
                    window.location.href = 'menu.html';
            } else {
                alert('Pokémon não encontrado.');
            }
        })
        .catch(error => console.error('Erro ao buscar dados do Pokémon:', error));
});