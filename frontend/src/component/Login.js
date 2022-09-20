import React, { useState } from 'react';
import requestLogin from '../utils/accounts.js'

 
function Login() {
    const [srvno, setSrvno] = useState('')
    const [password, setPassword] = useState('')
    const [text, setText] = useState('')

    const handleInputId = (e) => {
        setSrvno(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setPassword(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const signIn = () => {
        if(srvno === '') setText("아이디를 입력해주세요")
        else if(password === '') setText('패스워드를 입력해주세요')
        else{
            console.log(srvno, password)
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
        <div>
            <h2>Login</h2>
            <div>
                <label htmlFor='srvno'>ID : </label>
                <input type='srvno' name='srvno' value={srvno} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='password'>PW : </label>
                <input type='password' name='password' value={password} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={signIn}>Login</button>
            </div>
            <h3>{text}</h3>
        </div>
    )
}
 
export default Login;