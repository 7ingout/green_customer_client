import React from 'react';
import { Table, TableBody, TableCell, TableRow} from '@mui/material';

const DetailCustomer = () => {
    return (
        <div>
            <h2>고객 상세정보</h2>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>고객명</TableCell>
                        <TableCell>김그린</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>연락처</TableCell>
                        <TableCell>010-1234-4567</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>생년월일</TableCell>
                        <TableCell>1992-02-06</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>성별</TableCell>
                        <TableCell>여성</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>주소</TableCell>
                        <TableCell>울산시 남구</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default DetailCustomer;