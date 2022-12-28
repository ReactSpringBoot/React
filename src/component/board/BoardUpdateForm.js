import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import Swal from 'sweetalert2';
import boardStore from '../../store/boardStore';
import userStore from '../../store/userStore';
import ToBoardList from './ToBoardList';

const BoardUpdateForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const update = () => {
        console.log(title, contents, boardStore.board.boardNo);
        axios.post('/board/updateBoard', {title : title, contents : contents, boardNo : boardStore.board.boardNo})
        .then((res) => {
            console.log(res);
            Swal.fire('Update', '성공','success');
            navigate('/board');
        });
    }
    useEffect(() => {
        if (userStore.userNo === undefined) {
            navigate('/');
        } else {
            setTitle(boardStore.board.title);
            setContents(boardStore.board.contents);
        }
    }, [navigate]);
    return (
        <div className='div'>
            <h1>게시글 수정</h1>
            <p>제목</p>
            <Input className='input' type="text" onChange={e => setTitle(e.target.value)} value={title} /><br/>
            <p>내용</p>
            <Input className='input' type="text" onChange={e => setContents(e.target.value)} value={contents}/><br/>
            <Button onClick={update}>수정</Button><br/><br/>
            <ToBoardList/>
        </div>
    );
}

export default BoardUpdateForm;