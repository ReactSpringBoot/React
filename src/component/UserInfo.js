import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import Swal from 'sweetalert2';
import userStore from '../store/userStore';

const UserInfo = () => {
    const navigate = useNavigate();
    const logout = () => {
        userStore.setId(undefined);
        userStore.setName(undefined);
        userStore.setUserNo(undefined);
        navigate('/');
        Swal.fire('로그아웃', ' ','success');
    }
    return (
        <p>{userStore.name}({userStore.id}) <Button onClick={logout}>로그아웃</Button></p>
    );
}

export default UserInfo;