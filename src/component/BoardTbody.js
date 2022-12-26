import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import boardStore from '../store/boardStore';

const BoardTbody = () => {
    const [boardList, setBoardList] = useState();
    useEffect(() => {
        axios.get('/boardList', {})
        .then((res) => {
            // console.log(res.data);
            let result = [];
            for (let i = 0; i < res.data.length; i++) {
                const data = res.data[i];
                result.push(
                    <tr key={i+1}>
                        <td>{i+1}</td>
                        <td><Link to='/boardDetail' onClick={() => {boardStore.setBoard(data)}}>{data.title}</Link></td>
                        <td>{data.contents}</td>		
                        <td>{data.name}</td>		
                        <td>{data.date}</td>		
                    </tr>
                );
            }
            setBoardList(result);
        });
    }, []);
    return (
        <tbody>
            {boardList}
        </tbody>
    );
}

export default BoardTbody;