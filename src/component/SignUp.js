import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const login = () => {
        console.log(id, pw);
        axios.post('/signUp', {name : name, id : id, pw : pw})
        .then((res) => {
            console.log(res.data);
            
            alert(res.data ? "회원가입 성공" : "회원가입 실패");
            
            navigate('/');
        });
    }
    return (
        <div>
            <h1>회원가입</h1>
            <p>이름</p>
            <input type='text' onChange={(e) => {setName(e.target.value)}}/><br/>
            <p>아이디</p>
            <input type='text' onChange={(e) => {setId(e.target.value)}}/><br/>
            <p>비밀번호</p>
            <input type='text' onChange={(e) => {setPw(e.target.value)}}/><br/><br/>
            <button onClick={login}>회원가입</button><br/><br/>
            <Link to='/'>처음으로</Link>
        </div>
    );
}

export default SignUp;