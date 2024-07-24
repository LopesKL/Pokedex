

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (e) {
  
    e.preventDefault(); 

    let nomePokemon = document.getElementById("nomePokemon").value;

    const url = "https://pokeapi.co/api/v2/pokemon/"

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