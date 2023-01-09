import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import Swal from 'sweetalert2';
import userStore from '../../store/userStore';

const UserInfo = () => {
    const [info, setInfo] = useState([]);
    const navigate = useNavigate();

    const deleteUserStore = () => {
        userStore.setId(undefined);
        userStore.setName(undefined);
        userStore.setUserNo(undefined);
    }
    const login = () => {
        Swal.fire('알림', '로그인 페이지로 이동합니다.', 'info'); 
        navigate('/');
    }
    const logout = () => {
        axios.post('/api/user/logout', {})
        .then(() => {
            deleteUserStore('로그아웃', 'success');
            Swal.fire('로그아웃', ' ', 'success');
            navigate('/'); 
        })
        .catch((res) => {
            console.log(res);
            Swal.fire('서버 에러', '', "error");
        });        
    }
    useEffect(() => {
        axios.get('/api/user/getSession')
        .then((res) => {
            console.log('여기', res);
            if (res.data === '') {
                deleteUserStore();
                setInfo([<p><Button onClick={login}>로그인</Button></p>]); return;
            }
            let user = res.data;
            userStore.setId(user.id);
            userStore.setName(user.name);
            userStore.setUserNo(user.userNo);
            setInfo([<p>{userStore.name}({userStore.id}) <Button onClick={logout}>로그아웃</Button></p>]);
        })
        .catch((res) => {
            console.log(res);
            Swal.fire('서버 에러', '', "error");
        });        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <>
            {info}       
        </>
    );
}

export default UserInfo;