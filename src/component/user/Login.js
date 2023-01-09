import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import Swal from 'sweetalert2';
import userStore from '../../store/userStore';

const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const login = () => {
        console.log(id, pw);
        axios.post('/api/user/login', {id : id, pw : pw})
        .then((res) => {
            console.log(res);
            if (res.data === '') return Swal.fire('로그인', '실패', 'error');
           
            Swal.fire('로그인', '성공', "success");

            let user = res.data;
            userStore.setId(user.id);
            userStore.setName(user.name);
            userStore.setUserNo(user.userNo);

            navigate('/board');
        })
        .catch((res) => {
            console.log(res);
            Swal.fire('서버 에러', '', "error");
        });
    }

    return (
        <div className='div'>
            <h1>로그인</h1>            
            <Input className='input' type='text' onChange={(e) => {setId(e.target.value)}} placeholder='아이디'/><br/>            
            <Input className='input' type='text' onChange={(e) => {setPw(e.target.value)}} placeholder='비밀번호'/><br/>
            <Button onClick={login}>로그인</Button><br/><br/>
            <Button onClick={() => navigate('/signUp')}>회원가입</Button><br/><br/>
            <Button onClick={() => navigate('/board')}>게시판</Button>
        </div>
    );
}

export default Login;