//Returns an array of tileIds of the pieces with the given color
const getKingTile = (state, teamColor) => {

    var aAsciiValue = 97;
    var hAsciiValue = 104;

    for(var row = aAsciiValue; row < hAsciiValue + 1; row++) {

        for(var col = 0; col < 8; col++) {

            if(state.board[String.fromCharCode(row)][col] != null){

                const { piece, team } = state.board[String.fromCharCode(row)][col];
                if(team === teamColor && piece === 'king'){
                    return `${String.fromCharCode(row)}${col}`;
                }
            }            
        }
    }

    return null;
}

export default getKingTile;