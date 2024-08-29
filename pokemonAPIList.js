
function pokemonList() {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        data.results.forEach(pokemon => {
            
            console.log(capitalizeFirstLetter(pokemon.name));
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function getPokemonInfo(pokemonName) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(data => {
        console.log(`Nombre: ${capitalizeFirstLetter(data.name)}`);
        console.log(`Tipo: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`);
        console.log(`Habilidades: ${data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}`);
        console.log('Estadísticas:');
        data.stats.forEach(stat => {
            console.log(`${stat.stat.name}: ${stat.base_stat}`);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

pokemonList();
getPokemonInfo('charizard');
