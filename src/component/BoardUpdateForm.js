import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import boardStore from '../store/boardStore';
import userStore from '../store/userStore';

const BoardUpdateForm = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const update = () => {
        console.log(title, contents, boardStore.board.boardNo);
        axios.post('/updateBoard', {title : title, contents : contents, boardNo : boardStore.board.boardNo})
        .then((res) => {
            console.log(res);

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
        <div>
            <h1>게시글 수정</h1>
            <p>제목</p>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title}/><br/>
            <p>내용</p>
            <input type="text" onChange={e => setContents(e.target.value)} value={contents}/><br/><br/>
            <button onClick={update}>수정</button><br/><br/>
            <Link to='/board'>목록으로</Link>
        </div>
    );
}

export default BoardUpdateForm;