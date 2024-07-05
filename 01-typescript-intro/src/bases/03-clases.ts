import axios from "axios"
import { Move, PokeAPIResponse } from "../interface/pokeapi-response.interface"

export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    constructor(
        public readonly id: number,
        public readonly name: string,
    ) { }
    public scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    public speak() {
        console.log(` ${this.name}, ${this.name}`)
    }
    async getMoves(): Promise<Move[]>{
        const { data } = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/4`)
        return data.moves
    }
}

export const charmander = new Pokemon(1, 'Charmander')

console.log(charmander.imageUrl)
charmander.scream()
charmander.speak()
console.log(await charmander.getMoves())

