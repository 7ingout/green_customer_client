import React, { useState } from 'react';
import { Table, TableBody, TableRow, TableCell } from '@mui/material';
import axios from "axios";
import { API_URL } from '../config/contansts';
import './GalleryStyle.css'
import { getCookie } from '../util/cookie'
import { useNavigate } from 'react-router-dom';

const CreateGallery = () => {
    const navigate = useNavigate()
    const umail = getCookie("usermail")
    const [ formData, setformData ] = useState({
        imgurl:"",
        title:"",
        desc:"",
        usermail:umail
    });
    const onChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }
    const onChangeImg = (e) => {
        const { name } = e.target;
        const imgFormData = new FormData();
        imgFormData.append(name, e.target.files[0]);
        axios.post(`${API_URL}/upload`, imgFormData, {
            Headers: {'content-type':'multipart/form-data'},
        }).then (response=>{
            // setUploadImg(response.data.imageUrl);
            setformData({
                ...formData,
                imgurl: response.data.imageUrl
            })
        }).catch(e=>{
            console.log(e)
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/gallery`, formData)
        .then(res=> {
            alert('등록되었습니다.');
            navigate('/');
        }).catch(e=> {
            console.log(e);
        })
    }
    return (
        <div>
            <h2>이미지 게시글 등록하기</h2>
            <form onSubmit={onSubmit}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>이메일</TableCell>
                            <TableCell>
                                <input name="username" type="text"
                                value={formData.usermail}
                                onChange={onChange} readOnly />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>이미지보기</TableCell>
                            <TableCell>
                                <div className='imgDiv'>
                                    <div className='imgBox'></div>
                                    <input type="file" className='imgInput' name="img" onChange={onChangeImg}/>
                                    {
                                        formData.imgurl && <img src={`${API_URL}/upload/${formData.imgurl}`} alt="" className='imgview'/>
                                    }
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>제목</TableCell>
                            <TableCell>
                                <input name="title" type="text"
                                value={formData.title}
                                onChange={onChange}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>내용</TableCell>
                            <TableCell>
                                <input name="desc" type="text"
                                value={formData.desc}
                                onChange={onChange}/>
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

export default CreateGallery;