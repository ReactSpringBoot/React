import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from 'reactstrap';
import Swal from 'sweetalert2';

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
            
            Swal.fire(
                "회원가입",
                res.data ? "성공" : "실패",
                res.data ? "success" : "error"
            );
           

            navigate('/');
        });
    }
    return (
        <div className='div'>
            <h1>회원가입</h1>
            <Input className='input' type='text' onChange={(e) => {setName(e.target.value)}} placeholder='이름'/><br/>
            <Input className='input' type='text' onChange={(e) => {setId(e.target.value)}} placeholder='아이디'/><br/>
            <Input className='input' type='text' onChange={(e) => {setPw(e.target.value)}} placeholder='비밀번호'/><br/>
            <Button onClick={login}>회원가입</Button><br/><br/>
            <Button href='/'>처음으로</Button>
        </div>
    );
}

export default SignUp;