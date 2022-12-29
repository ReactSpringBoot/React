import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import Swal from 'sweetalert2';
import userStore from '../../store/userStore';

const UserInfo = () => {
    const [info, setInfo] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('/user/getSession')
        .then((res) => {
            console.log('이거야 이거', res.data);
            if (res.data === null) logout();
            let user = res.data;
            userStore.setId(user.id);
            userStore.setName(user.name);
            userStore.setUserNo(user.userNo);
            setInfo([<p>{userStore.name}({userStore.id}) <Button onClick={logout}>로그아웃</Button></p>]);
        });        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // 여기서 session의 유저 정보를 삭제 해야한다.
    const logout = () => {
        axios.post('/user/logout', {})
        .then(() => {
            userStore.setId(undefined);
            userStore.setName(undefined);
            userStore.setUserNo(undefined);
            navigate('/');
            Swal.fire('로그아웃', ' ','success');
        });        
    }
    return (
        <>
            {info}       
        </>
    );
}

export default UserInfo;