import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';
import BoardTbody from './BoardTbody';
import BoardThead from './BoardThead';
import UserInfo from './UserInfo';

const BoardList = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (userStore.userNo === undefined) {
            navigate('/');
        }
    });
    return (
        <div>
            <UserInfo/>
            <h1>게시판</h1>
            <table border='1'>
                <BoardThead/>
                <BoardTbody/>
            </table><br/>
            <Link to='/newBoard'>게시글 작성</Link>
        </div>
    );
}

export default BoardList;