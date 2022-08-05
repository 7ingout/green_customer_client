import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config/contansts';
import { setCookie } from '../util/cookie';
import { goToHome, setLogin } from '../modules/logincheck';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ loginData, setLoginData ] = useState({
        usermail: "",
        userpass: "",
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginData ({
            ...loginData,
            [name]: value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // input에 입력했는지 체크
        if(loginData.usermail === '' || loginData.userpass === '') {
            alert('이메일과 비밀번호를 입력해주세요');
        } else {
            axios.post (`${API_URL}/login`, loginData)
            // 로그인이 되었을 때
            .then(result => {  
                let { usermail, username } = result.data;
                console.log(result);
                // usermail에 값이 있을 때
                if(usermail !== null && usermail !== '' && usermail !== undefined) {
                    alert('로그인되었습니다.');
                    // 현재시간 객체를 생성
                    let expires = new Date();
                    // 60분 더한 값으로 변경
                    expires.setMinutes(expires.getMinutes()+60)
                    setCookie('usermail', `${usermail}`, {path: '/', expires});
                    setCookie('username', `${username}`, {path: '/', expires});
                    dispatch(setLogin());
                    dispatch(goToHome(navigate));
                }
            })
            .catch(e => {
                console.log(e);
                alert('ssssssssss 비밀번호를 확인해주세요');
            })
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <p><input type="text" name="usermail" value={loginData.usermail} onChange={onChange}/></p>
                <p><input type="password" name="userpass" value={loginData.userpass} onChange={onChange}/></p>
                <p>
                    <button type='submit'>로그인</button>
                    <Link to="/join"><button>회원가입</button></Link>
                </p>
            </form>
        </div>
    );
};

export default Login;