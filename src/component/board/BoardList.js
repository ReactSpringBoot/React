import React from 'react';
import { Table } from 'reactstrap';
import BoardTbody from './BoardTbody';
import BoardThead from './BoardThead';
import UserInfo from '../user/UserInfo';
import NewBoardButton from './NewBoardButton';
import { Observer } from 'mobx-react';

const BoardList = () => {    
    return (<Observer>{() => (
        <div className='div'>
            <UserInfo/>
            <h1>게시판</h1>
            <Table striped hover>
                <BoardThead/>
                <BoardTbody/>
            </Table><br/>
            <NewBoardButton/>
        </div>
    )}</Observer> );
}

export default BoardList;