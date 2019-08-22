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
    if(to[0] === 'a') {
      newBoard[toRow][toCol].piece = 'queen';
      // let randNum = Math.floor(Math.random() * 4);
      // console.log(randNum);
      // if(randNum == '0') {
      //   newBoard[toRow][toCol].piece = 'rook';
      // }
      // else if(randNum == '1') {
      //   newBoard[toRow][toCol].piece = 'bishop';
      // }
      // else if(randNum == '2') {
      //   newBoard[toRow][toCol].piece = 'knight';
      // }
      // else {
      //   newBoard[toRow][toCol].piece = 'queen';
      // }
    }
  }

  return { activeTile: null, legalMoves: [], board: newBoard };
};

export default movePiece;