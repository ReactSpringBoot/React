import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonGroup, Table } from 'reactstrap';
import boardStore from '../../store/boardStore';
import BoardAction from './BoardAction';
import CommentList from '../comment/CommentList';
import NewComment from '../comment/NewComment';
import ToBoardList from './ToBoardList';
import UserInfo from '../user/UserInfo';
import axios from 'axios';

const BoardDetail = () => {
    const [board, setBoard] = useState();
    const [comment, setComment] = useState();
    const location = useLocation();

    useEffect(() => {
        console.log(location.state.boardNo);
        axios.get(`/board/boardDetail/${location.state.boardNo}`, {})
        .then((res) => {
            console.log(res.data);
            boardStore.setBoard(res.data);
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
            setComment(
                <>
                    <ButtonGroup className='button_group'>
                        <BoardAction/>
                        <ToBoardList/>
                    </ButtonGroup>
                    <NewComment/>
                    <CommentList/>
                </>
            );
        });
        
    }, [location]);
    return (
        <div className='div'>
            <UserInfo/>
            <h1>게시글</h1>
            <Table striped hover>
                <thead></thead>
                {board}
            </Table>
            {comment}
            
        </div>
    );
}

export default BoardDetail;