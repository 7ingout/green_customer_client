import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setLogout } from '../modules/logincheck'
import { useDispatch, useSelector } from 'react-redux';
import { getCookie, removeCookie } from '../util/cookie';

const Header = () => {
    const uname = getCookie('username');
    const isLogin = useSelector(state=>state.logincheck.isLogin);
    const dispatch = useDispatch();
    const logoutClick = () => {
        removeCookie('username');
        removeCookie('usermail');
        dispatch(setLogout());
    }
    useEffect(()=>{
        // setLogin(true);
    },[isLogin]);
    return (
        <div id="header">
            <h1>그린고객센터</h1>
            <ul>
                <li><Link to="/">고객리스트보기</Link></li>
                <li><Link to="/write">신규 고객 등록하기</Link></li>
                { isLogin && 
                    <>
                        <li>{uname}님 환영합니다!</li>
                        <li onClick={logoutClick}>로그아웃</li>
                        <li><Link to="/">회원정보수정</Link></li>
                    </>
                }
                { isLogin || 
                    <>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li>
                    </>
                }

                <li>고객 검색</li>
            </ul>
        </div>
    );
};

export default Header;