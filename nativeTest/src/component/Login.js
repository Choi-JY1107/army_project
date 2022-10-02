import React, { useState } from 'react';
import { Alert } from 'react-native'; 
import { NativeBaseProvider, FormControl, Input, Text, Button} from 'native-base';

import { RequestLogin } from '../utils/accounts';

 
function Login(props) {
    const [userId, setuserId] = useState('')
    const [userPw, setuserPw] = useState('')
    const [text, setText] = useState('')
 
	// login 버튼 클릭 이벤트
    const SignIn = () => {
        if(userId === '') Alert.alert('로그인 오류', '아이디를 입력해주세요')
        else if(userPw === '') Alert.alert('로그인 오류', '비밀번호를 입력해주세요')
        else{
            RequestLogin(userId, userPw).then((response) => {
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
            <FormControl style={{ flex: 1, justifyContent: 'center'}}>
                <Text>아이디</Text>
                <Input value={userId} onChangeText={(userId) => setuserId(userId)} />
                <Text>비밀번호</Text>
                <Input value={userPw} onChangeText={(userPw) => setuserPw(userPw)} />
                <Text>{text}</Text>
                <Button onPress={SignIn} >로그인</Button>
            </FormControl>
        </NativeBaseProvider>
    )
}
 
export default Login;