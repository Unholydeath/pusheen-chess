import { tileData } from ".";

/**
 * Moves tile data from one tile to another.
 *
 * @param {Object} - state
 * @param {Object} - { from: String, to: String }
 * @return {Object}
 */
const movePiece = (state, { from, to }) => {
  const [fromRow, fromCol] = from.split('');
  const [toRow, toCol] = to.split('');
  const newBoard = JSON.parse(JSON.stringify(state.board));

  newBoard[fromRow][fromCol] = null;
  newBoard[toRow][toCol] = state.board[fromRow][fromCol];

  if(tileData(state, from).piece === 'pawn') {
    if(to[0] === 'a' || to[0] === 'h') {
      newBoard[toRow][toCol].piece = 'queen';
    }
  }

  return { activeTile: null, legalMoves: [], board: newBoard };
};

export default movePiece;