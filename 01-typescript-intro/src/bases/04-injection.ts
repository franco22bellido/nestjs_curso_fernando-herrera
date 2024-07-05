import { Move, PokeAPIResponse } from "../interface/pokeapi-response.interface";
import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from "../api/pokeApi.adapte";

export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }
    constructor(
        public readonly id: number,
        public name: string,
        //: Injectar dependencias
        private readonly _http: HttpAdapter
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`)
    }
    speak() {
        console.log(`${this.name}, ${this.name}`)
    }
    async getMoves(): Promise<Move[]> {
        const { moves } = await this._http.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/4`)
        return moves
    }
}
const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter()

export const charmander = new Pokemon(1, 'Charmander', pokeApi)
export const charmander2 = new Pokemon(1, 'Charmander', pokeApiFetch)

console.log(charmander.imageUrl)
charmander.scream()
charmander.speak()
console.log(await charmander.getMoves())

