import { API_URL } from "../../config/constants";

export class CharactersUseCase {
    list(): Promise<Response> {
        return fetch(`${API_URL}/character`)
    }

    find(id: number): Promise<Response> {
        return fetch( `${API_URL}/character/${id}`)
    }
}
