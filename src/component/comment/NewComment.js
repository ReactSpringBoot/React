import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';
import Swal from 'sweetalert2';
import boardStore from '../../store/boardStore';
import userStore from '../../store/userStore';
import { getCommentList } from './CommentTbody';

const NewComment = () => {
    const [comment, setComment] = useState('');
    const newComment = () => {
        if (comment === '') {
            Swal.fire('댓글 작성 실패', '내용을 작성 해주세요', 'error');
            return;
        }
        axios.post('/api/comment/newComment', {
            boardNo : boardStore.board.boardNo,
            userNo : userStore.userNo,
            comment : comment
        })
        .then(() => {
            setComment('');
            getCommentList();
        })
        .catch((res) => {
            console.log(res);
            Swal.fire('서버 에러', '', "error");
        });
    }
    useEffect(() => {
        console.log(userStore.userNo);
        if (userStore.userNo === undefined) {
            document.getElementById('input').disabled = true;
            document.getElementById('input').placeholder = '로그인을 해주세요.';
            document.getElementById('button').disabled = true;
        }        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userStore]);
    return (
        <>
            <InputGroup className='input_group'>
            <Input id='input' type='text' onChange={(e) => {setComment(e.target.value)}} value={comment} placeholder='댓글 작성'/>
            <Button id='button' onClick={newComment}>작성</Button>
            </InputGroup><br/><br/>            
        </>
    );
}

export default NewComment;