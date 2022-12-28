import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const ToBoardList = () => {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate('/board')}>목록으로</Button>
    );
}

export default ToBoardList;