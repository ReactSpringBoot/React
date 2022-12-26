import { Observer } from 'mobx-react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardDetail from './component/BoardDetail';
import BoardList from './component/BoardList';
import BoardUpdateForm from './component/BoardUpdateForm';
import Login from './component/Login';
import NewBoard from './component/NewBoard';
import SignUp from './component/SignUp';

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
