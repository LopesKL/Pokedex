document.addEventListener('DOMContentLoaded', (event) => {
    let tipoSelecionado = 0;
    let lista = 0;

    const selectElement = document.getElementById('typeSelect');
    selectElement.addEventListener('change', (event) => {
        tipoSelecionado = event.target.value;
        document.getElementById('listaPokemon').innerHTML = '';
        addItems();
    });

    function addItems() {
        const ul = document.getElementById('listaPokemon');

        if (tipoSelecionado == 0) {
            let url = `https://localhost:44373/api/pokemon`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    for (var i = lista; i < lista + 12; i++) {
                        var nome = data[i].name;
                        var numeroPokedex = data[i].id;
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
                        Editar.id = "btneditar";
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
                        Excluir.id = "btnexcluir";
                        Excluir.className = "btn btn-danger";
                        Excluir.textContent = "Excluir";

                        Excluir.setAttribute('data-pokedex', numeroPokedex);

                        Excluir.addEventListener('click', function () {
                            const numeroPokedex = this.getAttribute('data-pokedex'); 

                            console.log("Número da Pokédex:", numeroPokedex); 

                            fetch("https://localhost:44373/api/pokemon")
                                .then(response => response.json())
                                .then(data => {

                                    for (i = 0; i<100; i++){
                                        if(data[i].id == numeroPokedex){

                                            console.log("Numero I : " + i)

                                        fetch("https://localhost:44373/api/pokemon", {
                                            method: 'DELETE',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({id: numeroPokedex,
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
                    lista += 12;
                });

        } else if (tipoSelecionado != 0) {

            let url = `https://localhost:44373/api/pokemon`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    lista = 0;
                    for (var i = lista; i < lista + 100; i++) {

                        var tipo01 = data[i].firstType
                        var tipo02 = data[i].secondType

                        if (data[i].secondType != null) { tipo02 == data[i].secondType };

                        if (tipo01 == tipoSelecionado || tipo02 == tipoSelecionado) {

                            var nome = data[i].name;
                            var numeroPokedex = data[i].id;
                            var sprite = data[i].frontSpriteUrl;


                            const li = document.createElement('div');
                            li.className = "margem2 row";


                            const DivImagem = document.createElement('div');
                            DivImagem.className = "col-4 text-center ";

                            const Imagem = document.createElement('img');
                            Imagem.className = " text-center  ";
                            Imagem.src = sprite;

                            DivImagem.appendChild(Imagem);


                            const DivId = document.createElement('div');
                            DivId.className = "col-3 text-center ";

                            const Id = document.createElement('span');
                            Id.className = " text-center fw-bold";
                            Id.textContent = numeroPokedex;

                            DivId.appendChild(Id);


                            const DivNome = document.createElement('div');
                            DivNome.className = "col-3 text-center ";

                            const Nome = document.createElement('span');
                            Nome.className = " text-center fw-bold";
                            Nome.textContent = nome;

                            DivNome.appendChild(Nome);


                            const DivEditar = document.createElement('div');
                            DivEditar.className = "col-1 text-center ";

                            const Editar = document.createElement('a');
                            Editar.href = "excluir.html";
                            Editar.className = "link-offset-2 link-underline link-underline-opacity-0 text-dark";
                            Editar.textContent = "Editar";

                            DivEditar.appendChild(Editar);


                            const DivExcluir = document.createElement('div');
                            DivExcluir.className = "col-1 text-center ";

                            const Excluir = document.createElement('button');
                            Excluir.id = "btnexcluir";
                            Excluir.className = "btn btn-danger";
                            Excluir.textContent = "Excluir";

                            /*Excluir.addEventListener('click', (function (numeroPokedexCapturado) {
                                return function () {
                                    fetch('https://localhost:44373/api/pokemon/' + numeroPokedexCapturado, {
                                        method: 'DELETE',
                                    })
                                        .then(response => {
                                            if (response.ok) {
                                                console.log('Item deleted:', numeroPokedexCapturado);
                                            } else {
                                                console.error('Failed to delete item:', numeroPokedexCapturado);
                                            }
                                        })
                                        .catch(error => console.error('Error:', error));
                                };
                            })(numeroPokedex));*/

                            DivExcluir.appendChild(Excluir);

                            li.appendChild(DivImagem);
                            li.appendChild(DivId);
                            li.appendChild(DivNome);
                            li.appendChild(DivEditar);
                            li.appendChild(DivExcluir);

                            ul.appendChild(li);
                        }
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
    const idEditar = parseInt(localStorage.getItem('idEditar'), 10); // Converte para número
    let url = `https://localhost:44373/api/pokemon`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const pokemon = data.find(p => p.id === idEditar);
            if (pokemon) {
                document.getElementById('PokedexNumber').value = pokemon.id;
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
    event.preventDefault(); // Impede o envio padrão do formulário

    const idPokemon = document.getElementById('PokedexNumber').value;

    let url = `https://localhost:44373/api/pokemon`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const pokemonEncontrado = data.find(pokemon => pokemon.id == idPokemon);

            if (pokemonEncontrado) {
                // Fazer o PUT para atualizar o Pokémon encontrado
                fetch(`https://localhost:44373/api/pokemon`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: parseInt(document.getElementById('PokedexNumber').value, 10),
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
            } else {
                alert('Pokémon não encontrado.');
            }
        })
        .catch(error => console.error('Erro ao buscar dados do Pokémon:', error));
});
