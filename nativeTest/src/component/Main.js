import React, { useState } from 'react';
import { NativeBaseProvider, Text,} from 'native-base';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';

function Main(){
  
  const [value, onChange] = useState(new Date());
  return (
    <NativeBaseProvider>
      <Calendar onChange={onChange} value={value} />
        <Text>{moment(value).format("YYYY년 MM월 DD일")} </Text>
    </NativeBaseProvider>
  );
}
export default Main;