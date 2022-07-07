import React from 'react';
import axios from 'axios';
import { Table, TableBody, TableHead, TableCell, TableRow } from '@mui/material';
import Customer from './Customer';
import { API_URL } from '../config/contansts.js';
import useAsync from '../customHook/useAsync';

async function getCustomers(){
    const response = await axios.get(`${API_URL}/customers`);
    return response.data;
}
const CustomerList = () => {
    const [state] = useAsync(getCustomers, [])
    const { loading, data: customers, error } = state;
    if(loading) return <div>로딩중 ...</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!customers) return <div>로딩중입니다.</div>
    return (
        <div>
            <h2>고객리스트</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>번호</TableCell>
                        <TableCell>이름</TableCell>
                        <TableCell>연락처</TableCell>
                        <TableCell>생년월일</TableCell>
                        <TableCell>성별</TableCell>
                        <TableCell>주소</TableCell>
                        <TableCell>상세주소</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customers.map(customer=>(
                        <Customer key={customer.no} customer={customer}/>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default CustomerList;