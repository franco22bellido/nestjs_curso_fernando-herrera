export const pokemonIds: number[] = [1, 20, 30, 34, 66]

interface Pokemon {
    id : number;
    name : string;
    age?: number;  
}
export const Bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 12
}
export const charmander: Pokemon =  {
    id: 4, 
    name: 'Charmander', 
    age: 123
}

export const pokemons: Pokemon[] = [charmander, Bulbasaur];
