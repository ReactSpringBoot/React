import { observable } from 'mobx';

const boardStore = observable({
    // state
    board : undefined,

    setBoard(board) {
        this.board = board
    },
});

export default boardStore;