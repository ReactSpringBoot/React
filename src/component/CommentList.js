import React from 'react';
import { Table } from 'reactstrap';
import CommentTbody from './CommentTbody';
import CommentThead from './CommentThead';

const CommentList = () => {
    return (
        <div>
            <h3>댓글</h3>
            <Table striped hover>
                <CommentThead/>
                <CommentTbody/>
            </Table>
        </div>
    );
}

export default CommentList;