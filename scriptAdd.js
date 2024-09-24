//Listar Pokemon na tela

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
                        Id.className = " text-center ";
                        Id.textContent = numeroPokedex;
                        
                        DivId.appendChild(Id);


                        const DivNome = document.createElement('div');
                        DivNome.className = "col-3 text-center ";
                        
                        const Nome = document.createElement('span');
                        Nome.className = " text-center";
                        Nome.textContent = nome;
                        
                        DivNome.appendChild(Nome);

                        
                        const DivEditar = document.createElement('div');
                        DivEditar.className = "col-1 text-center ";
                        
                        const Editar = document.createElement('a');
                        Editar.href = "#";
                        Editar.className = "link-offset-2 link-underline link-underline-opacity-0 text-dark";
                        Editar.textContent = "Editar";
                        
                        DivEditar.appendChild(Editar);


                        
                        const DivExcluir = document.createElement('div');
                        DivExcluir.className = "col-1 text-center ";
                        
                        const Excluir = document.createElement('a');
                        Excluir.href = "#";
                        Excluir.className = "link-offset-2 link-underline link-underline-opacity-0 text-dark";
                        Excluir.textContent = "Excluir";
                        
                        DivExcluir.appendChild(Excluir);
                        
                        li.appendChild(DivImagem);
                        li.appendChild(DivId);
                        li.appendChild(DivNome);
                        li.appendChild(DivEditar);
                        li.appendChild(DivExcluir);
                        
                        ul.appendChild(li);
                        
                    }
                    lista += 12;
                })

            //Filtros por tipo 

        } else if (tipoSelecionado != 0) {

            let url = `https://localhost:44373/api/pokemon`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    lista = 0;
                    for (var i = lista; i < lista + 100; i++) {

                        var nome = data[i].name	;
                        console.log(nome)
                        var numeroPokedex = data[i].id;
                        var tipo01 = data[i].firstType;
                        var sprite = data[i].frontSpriteUrl;
                        var tipo02 = data[i].secondType;

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
                        Editar.href = "#";
                        Editar.className = "link-offset-2 link-underline link-underline-opacity-0 text-dark";
                        Editar.textContent = "Editar";
                        
                        DivEditar.appendChild(Editar);


                        
                        const DivExcluir = document.createElement('div');
                        DivExcluir.className = "col-1 text-center ";
                        
                        const Excluir = document.createElement('a');
                        Excluir.href = "#";
                        Excluir.className = "link-offset-2 link-underline link-underline-opacity-0 text-dark";
                        Excluir.textContent = "Excluir";
                        
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
                if (data[e] && (data[e].name.toLowerCase() == pesquisa || data[e].id.toString() == pesquisa)) {                    
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
