import React from 'react';
import { useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';

const UserInfo = () => {
    const navigate = useNavigate();
    const logout = () => {
        userStore.setId(undefined);
        userStore.setName(undefined);
        userStore.setUserNo(undefined);
        navigate('/');
        alert('로그아웃');
    }
    return (
        <div>
            <p>{userStore.name}({userStore.id}) <button onClick={logout}>로그아웃</button></p>
        </div>
    );
}

export default UserInfo;