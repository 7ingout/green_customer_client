import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGallery } from '../modules/gallery'
import { API_URL } from '../config/contansts.js';

const GalleryListContainer = () => {
    const { data, error, loading } = useSelector(state=>state.gallery);
    const dispatch = useDispatch();
    //컴포넌트 마운트 후 게시글 요청하기
    useEffect(()=>{
        dispatch(getGallery(dispatch))
    },[dispatch])
    if(loading) return <div>로딩중입니다.</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null
    return (
        <div>
            <ul>
                {data.map(da=><li>
                    <img src = {`${API_URL}/upload/${da.imgurl}`} width="300" alt="" />
                    <br/><span>{da.title}</span>
                </li>)}
            </ul>
        </div>
    );
};

export default GalleryListContainer;