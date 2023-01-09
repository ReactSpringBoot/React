import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const BoardTbody = () => {
    const [boardList, setBoardList] = useState([]);
    useEffect(() => {
        axios.get('/api/board/boardList', {})
        .then((res) => {
            // console.log(res.data);
            let result = [];
            for (let i = 0; i < res.data.length; i++) {
                const data = res.data[i];
                result.push(
                    <tr key={i+1}>
                        <td>{i+1}</td>
                        <td><Link to='/boardDetail' state={{boardNo : data.boardNo}}>{data.title}</Link></td>
                        {/* <td>{data.contents}</td>		 */}
                        <td>{data.name}</td>		
                        <td>{data.date}</td>		
                    </tr>
                );
            }
            setBoardList(result);
        })
        .catch((res) => {
            console.log(res);
            Swal.fire('서버 에러', '', "error");
        });
    }, []);
    return (
        <tbody>
            {boardList}
        </tbody>
    );
}

export default BoardTbody;