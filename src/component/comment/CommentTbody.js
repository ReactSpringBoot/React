import axios from 'axios';
import { Observer } from 'mobx-react';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import boardStore from '../../store/boardStore';
import CommentDelete from './CommentDelete';

export const getCommentList = () => {
    axios.get(`/api/comment/commentList/${boardStore.board.boardNo}`, {})
    .then((res) => {
        console.log(res.data);
        let result = [];
        res.data.forEach((v, i) => {
            result.push(
                <tr key={i}>
                    <td>{v.name}({v.id})</td>
                    <td>{v.comment}</td>
                    <td>{v.date}{<CommentDelete userNo={v.userNo} commentNo={v.commentNo}/>}</td>
                </tr>
            );
        });
        boardStore.setCommentList(result);
    })
    .catch((res) => {
        console.log(res);
        Swal.fire('서버 에러', '', "error");
    });
}

const CommentTbody = () => {
    useEffect(getCommentList, []);
    return (<Observer>{() => (
        <tbody>
            {boardStore.commentList}
        </tbody>
    )}</Observer>);
}

export default CommentTbody;