import { Observer } from 'mobx-react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardDetail from './component/board/BoardDetail';
import BoardList from './component/board/BoardList';
import BoardUpdateForm from './component/board/BoardUpdateForm';
import Login from './component/user/Login';
import NewBoard from './component/board/NewBoard';
import SignUp from './component/user/SignUp';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

const App = () => {
    return (<Observer>{() => (
        <>
            <Routes>
                <Route exact path='/' element={<Login/>} />
                <Route exact path='/signUp' element={<SignUp/>} />
                <Route exact path='/board' element={<BoardList/>} />
                <Route exact path='/newBoard' element={<NewBoard/>} />
                <Route exact path='/boardDetail' element={<BoardDetail/>} />
                <Route exact path='/boardUpdate' element={<BoardUpdateForm/>} />
            </Routes>
        </>
    )}</Observer>);
}

export default App;
