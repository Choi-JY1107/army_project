import axios from 'axios'
import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

function App() {
  const [날짜, onChange] = useState(new Date());

  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
        <div>
            <button onClick={onClick}>테스트</button><br/>
            <textarea value={JSON.stringify(data, null, 2)}/>
            <br/><br/><br/><br/>
        </div>
        <div>
            <Calendar onChange={onChange} value={날짜} />
            <div>
                <div>{moment(날짜).format('YYYY년 MM월 DD일')}</div>
            </div>
        </div>
      
    </div>
  );
}

export default App;