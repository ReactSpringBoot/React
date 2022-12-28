import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, Table } from 'reactstrap';
import boardStore from '../../store/boardStore';
import userStore from '../../store/userStore';
import BoardAction from './BoardAction';
import CommentList from '../comment/CommentList';
import NewComment from '../comment/NewComment';
import ToBoardList from './ToBoardList';
import UserInfo from '../user/UserInfo';

const BoardDetail = () => {
    const [board, setBoard] = useState();
    const navigate = useNavigate();
    // console.log(boardStore.board.userNo);
    
    useEffect(() => {
        if (userStore.userNo === undefined) {
            navigate('/');
        } else {
            setBoard(
                <tbody>
                    <tr>
                        <td>제목</td>
                        <td>{boardStore.board.title}</td>
                    </tr>
                    <tr>
                        <td>작성자</td>
                        <td>{boardStore.board.name}</td>
                    </tr>
                    <tr>
                        <td>날짜</td>
                        <td>{boardStore.board.date}</td>
                    </tr>
                    <tr>
                        <td>내용</td>
                        <td>{boardStore.board.contents}</td>
                    </tr>
                </tbody>
            );
        }
    }, [navigate]);
    return (
        <div className='div'>
            <UserInfo/>
            <h1>게시글</h1>
            <Table striped hover>
                <thead></thead>
                {board}
            </Table>
            <ButtonGroup className='button_group'>
                <BoardAction/>
                <ToBoardList/>
            </ButtonGroup>
            <NewComment/>
            <CommentList/>
        </div>
    );
}

export default BoardDetail;