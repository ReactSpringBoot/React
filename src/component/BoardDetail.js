import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import boardStore from '../store/boardStore';
import userStore from '../store/userStore';
import BoardAction from './BoardAction';
import UserInfo from './UserInfo';

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
        <div>
            <UserInfo/>
            <h1>게시글</h1>
            <table border='1'>
                <thead></thead>
                {board}
            </table><br/>
            <BoardAction/>
            <Link to='/board'>목록으로</Link>
        </div>
    );
}

export default BoardDetail;