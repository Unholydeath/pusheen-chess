<<<<<<< HEAD
import { movePiece, setActiveTile, tileData } from './helpers';
=======
import { movePiece, setActiveTile } from './helpers';
import isKingInCheck from './helpers/isKingInCheck';
import getKingTile from './helpers/getKingTile';
>>>>>>> master

/**
 * Either sets a tile to active or moves the active piece to this tile.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Object}
 */
const handleTileClick = (state, tileId) => {
  if (state.activeTile !== null) {
    let piece = getFromBoard(state);
    let color = piece.team === 0 ? 'white' : 'black';
    if(!state.legalMoves.includes(tileId) || state.turn !== color) {
      return { activeTile: null, legalMoves: [] };
    }
    state.turn = (state.turn === 'white' ? 'black' : 'white');
    var result = movePiece(state, { from: state.activeTile, to: tileId });
    const [newRow, newCol] = tileId.split('');
    var enemyKingColor;
    result.board[newRow][newCol].team === 0 ? enemyKingColor = 1 : enemyKingColor = 0;
    var kingTile = getKingTile(result, enemyKingColor)

    if(isKingInCheck(result, kingTile)){
      console.log("CHECK!!!!");
    }

    return result;
  }
  return setActiveTile(state, tileId);
};

const getFromBoard = state => {
  let activeID = state.activeTile;
  let row = activeID[0];
  let column = activeID[1];
  let rowObj = state.board[row];
  let tile = rowObj[column];
  return tile;
}

export default handleTileClick;
