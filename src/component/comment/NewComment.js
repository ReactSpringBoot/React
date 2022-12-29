import axios from 'axios';
import React, { useState } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';
import boardStore from '../../store/boardStore';
import userStore from '../../store/userStore';
import { getCommentList } from './CommentTbody';

const NewComment = () => {
    const [comment, setComment] = useState('');
    const newComment = () => {
        axios.post('/api/board/newComment', {
            boardNo : boardStore.board.boardNo,
            userNo : userStore.userNo,
            comment : comment
        })
        .then(() => {
            setComment('');
            getCommentList();
        })
    }
    return (
        <>
            <InputGroup className='input_group'>
            <Input type='text' onChange={(e) => {setComment(e.target.value)}} value={comment} placeholder='댓글 작성'/>
            <Button onClick={newComment}>작성</Button>
            </InputGroup><br/><br/>            
        </>
    );
}

export default NewComment;