import Calendar from "./component/Calendar";
// import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './component/Login';
import Page from './component/Page';

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

  return(
    <div>
      {isLogin
        ? <div> <Calendar isLogin={isLogin}/> <br/><Page/> </div> 
        : <div><Login/></div>
      }
    </div>
  )
}

export default App;