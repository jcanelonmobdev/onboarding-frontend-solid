import React from 'react'
import { Character } from "../../domain/entity/Character";


interface CharacterCardProps {
    character: Character
}

export const CharacterCard = ({character}: CharacterCardProps) => {
    return (
        <>
            <div className="card character-card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={character.image} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={character.image} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{character.name}</p>
                            <p className="subtitle is-6">{character.origin.name}</p>
                        </div>
                    </div>

                    <div className="content">
                        {character.species}
                        <br/>
                            <time dateTime="2016-1-1">{character.created}</time>
                    </div>
                </div>
            </div>
        </>
    )
};
