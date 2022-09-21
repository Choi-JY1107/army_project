import React, {useState} from "react";
import '../style/Page.css'
import {requestLogout, requestSearch, requestList} from '../utils/accounts'

function Page(props) {
    const [srvno, setSrvno] = useState('')
    const [logoutText, setlogoutText] = useState('')
    const [searchText, setSearchText] = useState('')
    const [listText, setListText] = useState('')

    const handleInputId = (e) => {
        setSrvno(e.target.value)
    }

    const onLogout = () => {
        requestLogout().then((response) => {
            setlogoutText(response.data.message)
            sessionStorage.removeItem('srvno')
            setTimeout(()=>{} , 3000);
            document.location.href='/'
        }).catch((error) => {
            const msg = error.response.data.message
            setlogoutText(msg)
        })
    }

    const onSearch = () => {
        requestSearch(srvno).then((response) => {
            setSearchText(response.data.message)
        }).catch((error) => {
            const msg = error.response.data.message
            setSearchText(msg)
        })
    }
    
    const onList = () => {
        requestList().then((response) => {
            setListText(response.data.message)
        }).catch((error) => {
            const msg = error.response.data.message
            setListText(msg)
        })
    }

  return (
    <div>
        <div className='accounts'>
            <h3>계정</h3>
        </div>

        <div className='logout'>
            <button type='button' onClick={onLogout}>로그아웃</button>
            <h3 className='message'>{logoutText}</h3>
        </div>
      
        <div className='search'>
            <button type='button' onClick={onSearch}>계정 조회</button>
            <input type='text' className='input' value={srvno} onChange={handleInputId} />
            <h3 className='message'>{searchText}</h3>
        </div>

        <div className='list'>
            <button type='button' onClick={onList}>계정 리스트</button>
            <h3 className='message'>{listText}</h3>
        </div>
    </div>
  );
};

export default Page;