const Character = (id, name, src, xCoordinates, yCoordinates) => {
    let foundStatus = false;
    return {
        id,
        name,
        src,
        xCoordinates, 
        yCoordinates,
        foundStatus,
    }
}

export default Character;