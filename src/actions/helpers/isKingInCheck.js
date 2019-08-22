import highlightLegalMoves from './highlightLegalMoves';
import getAllPiecesOfColor from './getAllPiecesOfColor';

const isKingInCheck = (state, tileId) => {

    if(tileId != null){

        const [kingRow, kingCol] = tileId.split('');
        var kingColor = state.board[kingRow][parseInt(kingCol)].team;

        var enemyPieces= [];
        var enemyMoves = [];

        kingColor === 0 ? enemyPieces = getAllPiecesOfColor(state, 1) : enemyPieces = getAllPiecesOfColor(state, 0);

        for(var i = 0; i < enemyPieces.length; i++){
            enemyMoves.push(...highlightLegalMoves(state, enemyPieces[i]));
            if(enemyMoves.includes(`${kingRow}${parseInt(kingCol)}`)){
                console.log("THE ENEMY KING IS IN CHECK!");
                return true;
            }
        }
    }
    return false;
}

export default isKingInCheck;