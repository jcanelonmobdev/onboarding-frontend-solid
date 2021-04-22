import { API_URL } from "../../config/constants";
import { Character } from "../entity/Character";
import Info from "../entity/Info";


export interface CharactersResponse {
    info?: Info,
    results: Character[]
}

export class CharactersUseCase {
    list(): Promise<CharactersResponse> {
        return fetch(`${API_URL}/character`).then(response => response.json())
    }

    find(id: number): Promise<Character> {
        return fetch( `${API_URL}/character/${id}`).then(response => response.json())
    }
}
