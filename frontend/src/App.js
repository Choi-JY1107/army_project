import Calendar from "./component/Calendar";
// import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './component/Login';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(sessionStorage.getItem('srvno') === null){
      console.log('no')
    } else{
      setIsLogin(true)
      console.log(sessionStorage.getItem('srvno'))
    }
  }, [isLogin])

  return (
    <div>
      {isLogin ? <Calendar isLogin={isLogin}/> : <Login /> }
    </div>
  );
}

export default App;