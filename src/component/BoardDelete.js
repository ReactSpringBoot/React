import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import Swal from 'sweetalert2';
import boardStore from '../store/boardStore';

const BoardDelete = () => {
    const navigate = useNavigate();
    
    const boardDelete = () => {
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
                axios.post(`/deleteBoard/${boardStore.board.boardNo}`, {})
                .then(() => {
                    Swal.fire(
                        'Deleted',
                        '삭제완료',
                        'success'
                    )
                    navigate('/board');
                });              
            }
        })        
    }
    return (
        <Button onClick={boardDelete}>삭제</Button>
    );
}

export default BoardDelete;