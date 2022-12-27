import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import boardStore from '../store/boardStore';
import userStore from '../store/userStore';
import { getCommentList } from './CommentTbody';

const CommentDelete = (props) => {
    const [link , setLink] = useState([]);
    useEffect(() => {
        if (userStore.userNo === props.userNo || boardStore.board.userNo === userStore.userNo) {
            setLink([<Link className='right' to='' onClick={() => {
                axios.post(`/commentDelete/${props.commentNo}`, {})
                .then(() => {
                    getCommentList();
                });
            }}>삭제</Link>]);
        }
        console.log(props.commentNo);
    }, [props]);
    return (
        <>
            {link}
        </>
    );
}

export default CommentDelete;