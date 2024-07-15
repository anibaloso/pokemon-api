
const btnApi = document.getElementById('btn-api');
// const apiNombre = document.getElementById('apiNombre');
// const apiImg = document.getElementById('apiImg');
// const apiType = document.getElementById('apiType');
const listaPokemon=document.getElementById('listaPokemon');

let URL = "https://pokeapi.co/api/v2/pokemon/";

// Plantilla de tarjeta
const cardTemplate = `
    <div class="col pokemon text-center">
        <div class="card mb-2 {bg-color}" style="width: 18rem;">
            <img src="{IMG_SRC}" class="card-img-top" alt="{NAME}">
            <div class="card-body">
                <h5 class="card-title">{NAME}</h5>
                <p class="card-text">Type: {TYPE}</p>
            </div>
        </div>
    </div>
`;

// Función para crear una tarjeta de Pokémon
const createPokemonCard = (pokemon) => {

    // Determinar el color de fondo según el tipo del Pokémon
    let bgColor = "";
    if (pokemon.types.some(typeInfo => typeInfo.type.name === "grass")) {
        bgColor = "bg-green";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "psychic")) {
        bgColor = "bg-psychic";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "ghost")) {
        bgColor = "bg-ghost";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "water")) {
        bgColor = "bg-water";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "fighting")) {
        bgColor = "bg-fighting";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "rock")) {
        bgColor = "bg-rock";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "flying")) {
        bgColor = "bg-flying";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "electric")) {
        bgColor = "bg-electric";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "fire")) {
        bgColor = "bg-fire";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "ground")) {
        bgColor = "bg-ground";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "poison")) {
        bgColor = "bg-poison";
    }else if (pokemon.types.some(typeInfo => typeInfo.type.name === "bug")) {
        bgColor = "bg-bug";
    }

    //se crea el remplazo en las card
    let cardHTML = cardTemplate
        .replace("{IMG_SRC}", pokemon.sprites.other["official-artwork"].front_default)//agrega la imagen ala card
        .replace(/{NAME}/g, pokemon.name)//le escribe el nombre que corresponde
        .replace("{TYPE}", pokemon.types.map(typeInfo => typeInfo.type.name).join(', '))//remplaza el tipo
        .replace("{bg-color}", bgColor); // Reemplazar el marcador de posición para el color de fondo
        

    listaPokemon.insertAdjacentHTML('beforeend', cardHTML);
};


// Función para manejar la respuesta de cada fetch
const handlePokemonResponse = (response) => {
    response.json().then(data => {
        createPokemonCard(data)
    }).catch(e => console.error(new Error(e)));
};

for (let i = 0; i <= 151; i++) {
    fetch(URL + i)
    .then(handlePokemonResponse)
    .catch(e => console.error(new Error(e)));
    
}
