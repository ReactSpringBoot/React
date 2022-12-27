import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import Swal from 'sweetalert2';
import userStore from '../store/userStore';
import ToBoardList from './ToBoardList';
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
            Swal.fire('게시글 작성', '성공', "success");
            navigate('/board');
        });
    }
    useEffect(() => {
        if (userStore.userNo === undefined) {
            navigate('/');
        }
    });
    return (
        <div className='div'>
            <UserInfo/>
            <h1>게시글 작성</h1>
            <Input className='input' type="text" onChange={e => setTitle(e.target.value)} placeholder='제목'/><br/>
            <Input className='input' type="text" onChange={e => setContents(e.target.value)} placeholder='내용'/><br/>
            <Button onClick={insert}>작성</Button><br/><br/>
            <ToBoardList/>
        </div>
    );
}

export default NewBoard;