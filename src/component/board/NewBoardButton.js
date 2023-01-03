import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import userStore from '../../store/userStore';

const NewBoardButton = () => {
    const navigate = useNavigate();
        
    useEffect(() => {
        setTimeout( 
            () => { 
                console.log(userStore.userNo);
                if (userStore.userNo === undefined) {
                    document.getElementById('button').style.visibility = 'hidden';
                } 
            },
            100
        ); 
    }, []);

    return (
        <>
            <Button id='button' onClick={() => navigate('/newBoard')}>게시글 작성</Button>
        </>
    );
};

export default NewBoardButton;