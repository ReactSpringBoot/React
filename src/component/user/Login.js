import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import Swal from 'sweetalert2';

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
            
            navigate('/board');
        });
    }
    const signUp = () => {
        navigate('/signUp');
    }
    return (
        <div className='div'>
            <h1>로그인</h1>            
            <Input className='input' type='text' onChange={(e) => {setId(e.target.value)}} placeholder='아이디'/><br/>            
            <Input className='input' type='text' onChange={(e) => {setPw(e.target.value)}} placeholder='비밀번호'/><br/>
            <Button onClick={login}>로그인</Button><br/><br/>
            <Button onClick={signUp}>회원가입</Button>
        </div>
    );
}

export default Login;