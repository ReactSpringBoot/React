import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import boardStore from '../../store/boardStore';
import userStore from '../../store/userStore';
import { getCommentList } from './CommentTbody';

const CommentDelete = (props) => {
    const [link , setLink] = useState([]);
    useEffect(() => {
        if (userStore.userNo === props.userNo || boardStore.board.userNo === userStore.userNo) {
            setLink([<Link className='right' to='' state={{boardNo : boardStore.board.boardNo}} onClick={() => {
                Swal.fire({
                    title: '정말 삭제하시겠습니까?',
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#4B088A',
                    cancelButtonColor: '#01DF01',
                    confirmButtonText: '예',
                    cancelButtonText: '아니요'
                })
                .then((result) => {
                    if (result.value) {
                        axios.post(`/board/commentDelete/${props.commentNo}`, {})
                        .then(() => {
                            getCommentList();
                            Swal.fire(
                                'Deleted',
                                '삭제완료',
                                'success'
                            )
                        });              
                    }
                })
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