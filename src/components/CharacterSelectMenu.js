import React from "react";

const CharacterSelectMenu = (props) => {
    const { currentLevel, setSelectedCharacter, clickCoordinates } = props;

    let style = {
        left: clickCoordinates[0],
        top: clickCoordinates[1],
    }

    let selectCharacter = (character) => {
        setSelectedCharacter(character);
    }

    return (
        <div className="character-select-menu" style={style}>
            {(currentLevel.characters).map((character) => {
                if (character.foundStatus === false) {
                    return (
                        <div key={character.id} className="character-select" onClick={() => selectCharacter(character)}>
                            <img className="character-profile" src={character.src} alt={character.name}></img>
                            <div>{character.name}</div>
                        </div>
                    )
                }
            })}
        </div >
    )

}

export default CharacterSelectMenu;