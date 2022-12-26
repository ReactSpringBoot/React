import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userStore from '../store/userStore';

const Login = () => {
    const navigate = useNavigate();
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const login = () => {
        console.log(id, pw);
        axios.post('/login', {id : id, pw : pw})
        .then((res) => {
            console.log(res);
            if (res.data === '') return alert('로그인 실패');
           
            alert('로그인 성공');
            let user = res.data;
            userStore.setId(user.id);
            userStore.setName(user.name);
            userStore.setUserNo(user.userNo);
            console.log(user.userNo);
            
            navigate('/board');
        });
    }
    const signUp = () => {
        navigate('/signUp');
    }
    return (
        <div>
            <h1>로그인</h1>
            <p>아이디</p>
            <input type='text' onChange={(e) => {setId(e.target.value)}}/><br/>
            <p>비밀번호</p>
            <input type='text' onChange={(e) => {setPw(e.target.value)}}/><br/><br/>
            <button onClick={login}>로그인</button><br/><br/>
            <button onClick={signUp}>회원가입</button>
        </div>
    );
}

export default Login;