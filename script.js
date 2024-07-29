let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  
    e.preventDefault();

    let nomePokemon = document.getElementById("nomePokemon").value;

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${quantidadePokemon}&offset=0`

    let link = url + nomePokemon;

    link = link.toLocaleLowerCase();

    fetch(link)
  .then(response => {

    return response.json();
  })

  .then(data => {
    
    /* Nome Pokemon*/

    let nomePokemon2 = (data.name);

    document.getElementById("nome").textContent = nomePokemon2;

    /* Tipos Pokemon */

    let tipo01 = (data.types[0].type.name)

    document.getElementById("tipo01").textContent = tipo01;

    const quantidadeDeAtaques = data.types.length;

    if(quantidadeDeAtaques == 2){

        let tipo02 = (data.types[1].type.name)
        document.getElementById("tipo02").textContent = tipo02;
    } else{
        let tipo02 = ("")
        document.getElementById("tipo02").textContent = tipo02;
    }


    /* Numero Pokedex*/

    let numeroPokedex= (data.id)

    document.getElementById("numeroPokedex").textContent = numeroPokedex;


    /* Sprites */

    let spriteFront = (data.sprites.front_default)
    document.getElementById("spriteFront").src = spriteFront;

    let spriteFrontShiny = (data.sprites.front_shiny)
    document.getElementById("spriteFrontShiny").src = spriteFrontShiny;

  })

});



const types = [
  { text: `${coiso.types[0].type.name}` },
  {  text: `${coiso.types[0].type.name}`}
];



types.forEach(type => {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.id = type.id;
  li.textContent = type.text;
  ulTypes.appendChild(li);
});


/* ideias para usar */

let normal = "1";
let lutador = "2";
let voador = "3";
let venenoso = "4"
let terrestre = "5";
let pedra = "6";
let inseto = "7";
let fantasma = "8"
let aco ="9"
let fogo = "10"
let agua = "11"
let planta = "12"
let eletrico = "13"
let psiquico = "14"
let gelo = "15"
let dragao = "16"
let dark = "17"
let fada = "18"


document.addEventListener('DOMContentLoaded', (event) => {

  // Função para criar e adicionar 12 elementos li

  function addItems() {
      const ul = document.getElementById('item-list');
      const currentCount = ul.children.length;
      for (let i = 1; i <= 4; i++) {
          const li = document.createElement('li');
          li.textContent = `Pokemon ${currentCount + i}`;
          ul.appendChild(li);
      }
  }

  // Adicionar os primeiros 12 elementos li quando a página é carregada

  addItems();
  addItems();
  addItems();

  // Adicionar evento ao botão para adicionar mais 12 elementos li

  const loadMoreButton = document.getElementById('load-more');
  loadMoreButton.addEventListener('click', addItems);
});





// quando pokemon for separado por tipo usar uma estrutura de repetição para alterar cada nome que vai aparecer

let pokemon = (data.pokemon[0].name)
console.log(pokemon)








//Lista pokedex padrão, 12 primeiros com botão para aparecer os proximos 12


let quantidadePokemon = 12;

function atualizarUrl() {
    let textoUrl1 = String(quantidadePokemon);
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${textoUrl1}&offset=0`;
    console.log (url)
}

document.getElementById('botaoCarregar').addEventListener('click', verificar);

function verificar(event) {
    event.preventDefault(); 

    quantidadePokemon += 12;
    atualizarUrl()
}

atualizarUrl()


