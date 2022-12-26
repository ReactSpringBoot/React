import React, { useEffect, useState } from 'react';
import boardStore from '../store/boardStore';
import userStore from '../store/userStore';
import BoardDelete from './BoardDelete';
import BoardUpdate from './BoardUpdate';

const BoardAction = () => {
    const [action , setAction] = useState();
    useEffect(() => {
        if(userStore.userNo === boardStore.board.userNo){
            setAction(
                <>
                    <BoardUpdate/>
                    <BoardDelete/>
                </>
            );
        }
    }, []);
    return (
        <div>
            {action}<br/>
        </div>
    );
}

export default BoardAction;