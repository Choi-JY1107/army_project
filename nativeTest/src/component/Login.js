import React, { useState } from 'react';
import { View, Text } from 'react-native';
import {requestLogin} from '../utils/accounts.js';

 
function Login() {
    const [srvno, setSrvno] = useState('')
    const [password, setPassword] = useState('')
    const [text, setText] = useState('')

    const HandleInputId = (e) => {
        setSrvno(e.target.value)
    }
 
    const HandleInputPw = (e) => {
        setPassword(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const SignIn = () => {
        if(srvno === '') setText("아이디를 입력해주세요")
        else if(password === '') setText('패스워드를 입력해주세요')
        else{
            requestLogin(srvno, password).then((response) => {
                setText(response.data.message)
                sessionStorage.setItem('srvno', srvno)
                document.location.href = '/'
            }).catch((error) => {
                const msg = error.response.data.message
                setText(msg)
            })
        }
    }
 
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Login</Text>
                <Text htmlFor='srvno'>ID : </Text>
                <input type='text' name='srvno' value={srvno} onChange={HandleInputId} />
            
                <Text htmlFor='password'>PW : </Text>
                <input type='password' name='password' value={password} onChange={HandleInputPw} />
            
                <button type='button' onClick={SignIn}>Login</button>
            
            <Text>{text}</Text>
        </View>

    )
}
 
export default Login;