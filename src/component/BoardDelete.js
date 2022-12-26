import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import boardStore from '../store/boardStore';

const BoardDelete = () => {
    
    const boardDelete = () => {
        axios.post(`/deleteBoard/${boardStore.board.boardNo}`, {})
    }
    return (
        <div>
            <Link to='/board' onClick={boardDelete}>삭제</Link>
        </div>
    );
}

export default BoardDelete;