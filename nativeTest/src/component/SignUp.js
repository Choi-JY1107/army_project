import React, { useState } from 'react';
import { NativeBaseProvider, FormControl, Text, Select, Input, Button } from 'native-base';
import { rankData } from '../utils/rankData';

function SignUp(){
  const [srvno, setSrvno] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [rank, setRank] = useState('이병');
  const [position, setPosition] = useState('');
  const [unitId, setUnitId] = useState('0');

  return (
    <NativeBaseProvider>
      <FormControl style={{ justifyContent: 'center'}}>
        <Text>군번</Text>
        <Input value={srvno} onChangeText={(srvno) => setSrvno(srvno)} />

        <Text>비밀번호</Text>
        <Input value={password} onChangeText={(password) => setPassword(password)} />

        <Text>전화번호</Text>
        <Input value={phone} onChangeText={(phone) => setPhone(phone)} />

        <Text>계급</Text>
        <Select 
          selectedValue={rank} 
          onChangeText={(rank) => setPhone(rank)} >
          {rankData.map((data)=>{ return <Select.Item label={data.value} value={data.value} key={data.value.toString()} /> })}
        </Select>
        
        <Text>직책</Text>
        <Input value={position} onChangeText={(position) => setPhone(position)} />

        <Text>소속 부대</Text>
        <Input value={unitId} onChangeText={(unitId) => setPhone(unitId)} />

        <Button onPress={SignUp} ><Text>회원가입</Text></Button>
      </FormControl>
    </NativeBaseProvider>
  );
}
export default SignUp;