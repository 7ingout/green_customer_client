import React, { useState } from 'react';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import PopupDom from "./PopupDom"
import PopupPostCode from "./PopupPostCode"

const CreateCustomer = () => {
    // 우편번호 관리하기
    const onAddData = (data) => {
        console.log(data);
        setFormData({
            ...formData,
            c_add: data.address
        })
    }
    // 팝업창 상태 관리
    const [ isPopupOpen, setIsPopupOpen ] = useState(false);
    // 팝업창 상태 true로 변경
    const openPostCode = ()=> {
        setIsPopupOpen(true);
    }
    // 팝업창 상태 false로 변경
    const closePostCode = () => {
        setIsPopupOpen(false);
    }
    const [ formData, setFormData ] = useState({
        c_name: "",
        c_phone: "",
        c_birth: "",
        c_gender: "",
        c_add: "",
        c_adddetail: ""
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    return (
        <div>
            <h2>신규 고객 등록하기</h2>
            <form>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>이름</TableCell>
                            <TableCell>
                                <input name="c_name" type="text"
                                value={formData.c_name}
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>연락처</TableCell>
                            <TableCell>
                                <input name="c_phone" type="text"
                                value={formData.c_phone}
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>생년월일</TableCell>
                            <TableCell>
                                <input name="c_birth" type="date"
                                value={formData.c_birth}
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>성별</TableCell>
                            <TableCell>
                                여성<input name="c_gender" type="radio"
                                value="여성"
                                onChange={onChange}/>
                                남성<input name="c_gender" type="radio"
                                value="남성"
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>주소</TableCell>
                            <TableCell>
                                <input name="c_add" type="text"
                                value={formData.c_add}
                                onChange={onChange}/>
                                <input name="c_adddetail" type="text"
                                value={formData.c_adddetail}
                                onChange={onChange}/>
                                <button type="button" onClick={openPostCode}>우편번호 검색</button>
                                <div id="popupDom">
                                    {isPopupOpen && (
                                        <PopupDom>
                                            <PopupPostCode onClose={closePostCode}
                                            onAddData={onAddData}
                                            />
                                        </PopupDom>
                                    )}
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>
                               <button type="submit">등록</button>
                               <button type="reset">취소</button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        </div>
    );
};

export default CreateCustomer;