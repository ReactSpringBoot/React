import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
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
        <div className='div'>
            <UserInfo/>
            <h1>게시판</h1>
            <Table striped hover>
                <BoardThead/>
                <BoardTbody/>
            </Table><br/>
            <Button onClick={() => navigate('/newBoard')}>게시글 작성</Button>
        </div>
    );
}

export default BoardList;