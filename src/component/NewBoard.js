import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';
import UserInfo from './UserInfo';

const NewBoard = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();
    const insert = () => {
        console.log(title, contents, userStore.userNo);
        axios.post('/newBoard', {title : title, contents : contents, userNo : userStore.userNo})
        .then((res) => {
            console.log(res);

            navigate('/board');
        });
    }
    useEffect(() => {
        if (userStore.userNo === undefined) {
            navigate('/');
        }
    });
    return (
        <div>
            <UserInfo/>
            <h1>게시글 작성</h1>
            <p>제목</p>
            <input type="text" onChange={e => setTitle(e.target.value)}/><br/>
            <p>내용</p>
            <input type="text" onChange={e => setContents(e.target.value)}/><br/><br/>
            <button onClick={insert}>작성</button><br/><br/>
            <Link to='/board'>목록으로</Link>
        </div>
    );
}

export default NewBoard;