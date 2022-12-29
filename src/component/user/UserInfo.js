import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import Swal from 'sweetalert2';
import userStore from '../../store/userStore';

const UserInfo = () => {
    const [info, setInfo] = useState([]);
    const navigate = useNavigate();

    const deleteUserStore = (str, acction) => {
        userStore.setId(undefined);
            userStore.setName(undefined);
            userStore.setUserNo(undefined);
            Swal.fire(str, ' ', acction);
            navigate('/');
    }
    const logout = () => {
        axios.post('/api/user/logout', {})
        .then(() => {
            deleteUserStore('로그아웃', 'success');
        });        
    }
    useEffect(() => {
        axios.get('/api/user/getSession')
        .then((res) => {
            console.log('여기', res);
            if (res.data === '') {
                deleteUserStore('로그인을 해주세요', 'info');
            }
            let user = res.data;
            userStore.setId(user.id);
            userStore.setName(user.name);
            userStore.setUserNo(user.userNo);
            setInfo([<p>{userStore.name}({userStore.id}) <Button onClick={logout}>로그아웃</Button></p>]);
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