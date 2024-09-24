const Id = document.getElementById('PokedexNumber').value;
const Name= document.getElementById('PokemonName').value;
const FrontSprite = document.getElementById('FrontSprite').value;
const BackSprite = document.getElementById('BackSprite').value;
const FrontShinySprite = document.getElementById('FrontShinySprite').value;
const BackShinySprite = document.getElementById('BackShinySprite').value;
const Type01 = document.getElementById('Type01').value;
const Type02 = document.getElementById('Type02').value;



document.getElementById('FormInfotmations').addEventListener('submit', function (event) {
    event.preventDefault();

if(Id != null && Name != null && FrontSprite != null && BackSprite != null && FrontShinySprite != null && BackShinySprite != null && Type01 != null && Type02 != null){

fetch('https://localhost:44373/api/pokemon', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        id: Id,
        name: Name,
        frontSpriteUrl: FrontSprite,
        backSpriteUrl: BackSprite,
        frontShinySpriteUrl: FrontShinySprite,
        backShinySpriteUrl: BackShinySprite,
        firstType: Type01,
        secondType: Type01,
    }),
})
.then(response => response.json())
.then(data => console.log('Item added:', data))
.catch(error => console.error('Error:', error));

    }
})
