//Returns an array of tileIds of the pieces with the given color
const getAllPiecesOfColor = (state, teamColor) => {

    var aAsciiValue = 97;
    var hAsciiValue = 104;    
    var pieces = [];

    for(var row = aAsciiValue; row < hAsciiValue + 1; row++) {

        for(var col = 0; col < 8; col++){

            const tile = state.board[String.fromCharCode(row)][col]

            if(tile !== null){

                const team = tile.team;

                if(team === teamColor){
                    var tileId = `${String.fromCharCode(row)}${col}`;
                    pieces.push(tileId);
                }                
            }            
        }
    }

    return pieces;
}

export default getAllPiecesOfColor;