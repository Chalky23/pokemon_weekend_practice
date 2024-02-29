// PLAN
// STEP 1 create fetch function to pull data from api on charmander
// create variable for the URL

let charmander = document.querySelector("#charmander");
let charmeleon = document.querySelector("#charmeleon");
let charizard = document.querySelector("#charizard");
let bulbasaur = document.querySelector("#bulbasaur");
let ivysaur = document.querySelector("#ivysaur");
let venusaur = document.querySelector("#venusaur");
let squirtle = document.querySelector("#squirtle");
let wartortle = document.querySelector("#wartortle");
let blastoise = document.querySelector("#blastoise");
let pokemonSelector = "charmander";
let image = document.querySelector("#image");
image.src = `images/charmander.png`

let url = `https://pokeapi.co/api/v2/pokemon/`
let newInput = pokemonSelector;
url += encodeURIComponent(newInput);

charmander.addEventListener("click", function(){
    let name = "charmander"
    pokemonSelector = "name";
    url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetchPokemon();
    getPokemonData();
    image.src = `images/${name}.png`;
});

charmeleon.addEventListener("click", function(){
    let name = "charmeleon"
    pokemonSelector = "name";
    url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetchPokemon();
    getPokemonData();
    image.src = `images/${name}.png`;
});

charizard.addEventListener("click", function(){
    let name = "charizard";
    pokemonSelector = "name";
    url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetchPokemon();
    getPokemonData();
    image.src = `images/${name}.png`;
});
bulbasaur.addEventListener("click", function(){
    let name = "bulbasaur";
    pokemonSelector = "name";
    url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetchPokemon();
    getPokemonData();
    image.src = `images/${name}.png`;
});
ivysaur.addEventListener("click", function(){
    let name = "ivysaur";
    pokemonSelector = "name";
    url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetchPokemon();
    getPokemonData();
    image.src = `images/${name}.png`;
});
venusaur.addEventListener("click", function(){
    let name = "venusaur";
    pokemonSelector = "name";
    url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetchPokemon();
    getPokemonData();
    image.src = `images/${name}.png`;
});
squirtle.addEventListener("click", function(){
    let name = "squirtle";
    pokemonSelector = "name";
    url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetchPokemon();
    getPokemonData();
    image.src = `images/${name}.png`;
});
wartortle.addEventListener("click", function(){
    let name = "wartortle";
    pokemonSelector = "name";
    url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetchPokemon();
    getPokemonData();
    image.src = `images/${name}.png`;
});
blastoise.addEventListener("click", function(){
    let name = "blastoise";
    pokemonSelector = "name";
    url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    fetchPokemon();
    getPokemonData();
    image.src = `images/${name}.png`;
});



// create async function
async function fetchPokemon(){
let response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  })

// if request fails statement

  if (!response.ok) {
    console.error(response.status);
    console.error(await response.text())
    alert("Sorry no Pokemon at the moment! \nPlease try again later.");
    return;
  }

  let data = await response.json();

  // log data

  console.log(data);

  return data;

};

fetchPokemon();



// run function using event listener for dom content loaded



// STEP 2 access the data to display in the html

// variables as required
let htmlName = document.querySelector("#name");
let htmlType = document.querySelector("#type");
let htmlHeight = document.querySelector("#height");
let htmlWeight = document.querySelector("#weight");

document.addEventListener("DOMContentLoaded", getPokemonData())

// async function to display the data
async function getPokemonData(){
    let pokemonData = await fetchPokemon();

    htmlName.textContent = `Name: ${pokemonData.name}`;
    htmlType.textContent = `Type: ${pokemonData.types[0].type.name}`;
    htmlHeight.textContent = `Height: ${pokemonData.height}0cm`;
    htmlWeight.textContent = `Weight: ${pokemonData.weight}kg`;
    
}

// span/article/p elements in html to display the info

// STEP 3 update css to make it look user friendly
// background colour
// font family
// list of attributes in a container
// image displayed separately


// STEP 4 add options to change the pokemon displayed
// choose three starters and evolutions
// buttons to change the selected pokemon
// refetch the api for the new pokemon


// STEP 5 add pictures for each pokemon displayed
// download library of images for selected pokemon
// change img src for the correct pokemon dependent on what is displayed

