import { observable } from 'mobx';

const boardStore = observable({
    // state
    board : undefined,
    commentList : undefined,

    setBoard(board) {
        this.board = board
    },

    setCommentList(commentList) {
        this.commentList = commentList
    },
});

export default boardStore;