import { movePiece, setActiveTile } from './helpers';
import isKingInCheck from './helpers/isKingInCheck';
import getKingTile from './helpers/getKingTile';

/**
 * Either sets a tile to active or moves the active piece to this tile.
 *
 * @param {Object} - state
 * @param {String} - tileId
 * @return {Object}
 */
const handleTileClick = (state, tileId) => {
  if (state.activeTile !== null && !state.legalMoves.includes(tileId)) {
    return { activeTile: null, legalMoves: [] };
    
  } else if (state.activeTile !== null) {

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

export default handleTileClick;
