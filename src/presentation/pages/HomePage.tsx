import React, { useEffect, useState } from 'react';
import { Character } from "../../domain/entity/Character";
import { CharactersUseCase } from "../../domain/usecase/CharactersUseCase";
import { CharacterCard } from "../component/CharacterCard";
const HomePage: React.FC = () => {

    const charactersUseCase = new CharactersUseCase()
    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        charactersUseCase.list().then((charactersData)  => {
            setCharacters(charactersData.results)
        }).catch(e => {
            console.error(e)
            return []
        })
    }, [])

    return (
        <div className="section">
            <div className="container">
                <div className="columns is-fullwidth is-multiline">
                    {characters.map((character: Character, i: number) => (
                        <div key={`character${i}`} className="column is-one-quarter">
                            <CharacterCard character={character}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage
