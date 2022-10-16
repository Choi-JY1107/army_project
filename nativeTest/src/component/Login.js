import React, { useState } from 'react';
import { Alert } from 'react-native'; 
import { NativeBaseProvider, FormControl, Input, Text, Button, Image} from 'native-base';

import { AccountsLogin } from '../utils/accounts';
import Army from '../assets/army.jpg';

 
function Login(props) {
    const [srvno, setSrvno] = useState('')
    const [password, setPassword] = useState('')
    const [text, setText] = useState('')
 
	// login 버튼 클릭 이벤트
    const SignIn = () => {
        if(srvno === '') Alert.alert('로그인 오류', '아이디를 입력해주세요')
        else if(password === '') Alert.alert('로그인 오류', '비밀번호를 입력해주세요')
        else{
            AccountsLogin(srvno, password).then((response) => {
                setText(response.data.message)
                Alert.alert('로그인 성공', '성공!')
                props.navigation.navigate('Main')
            }).catch((error) => {
                const msg = error.message
                setText(msg)
                Alert.alert('로그인 실패', '실패!')
            })
        }
    }
 
    return(
        <NativeBaseProvider>
            <FormControl style= {{ flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={Army} style={{width: '70%'}} alt="error" />
            </FormControl>

            <FormControl style={{ flex: 5, justifyContent: 'center'}}>
                <Text>아이디</Text>
                <Input style={{borderRadius:30}} value={srvno} onChangeText={(srvno) => setSrvno(srvno)} />
                <Text>비밀번호</Text>
                <Input value={password} onChangeText={(password) => setPassword(password)} />
                <Text>{text}</Text>
                <Button onPress={SignIn} ><Text>로그인</Text></Button>
            </FormControl>

            <FormControl style={{ flex: 2, justifyContent: 'center'}}>
                <Button onPress={ () => props.navigation.navigate('SignUp')}>
                    <Text>회원가입</Text>
                </Button>
            </FormControl>
        </NativeBaseProvider>
    )
}
 
export default Login;