import { movePiece, setActiveTile } from './helpers';

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
    return movePiece(state, { from: state.activeTile, to: tileId });
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
