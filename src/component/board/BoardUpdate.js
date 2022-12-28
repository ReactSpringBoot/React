import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const BoardUpdate = () => {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate('/boardUpdate')}>수정</Button>
    );
}

export default BoardUpdate;