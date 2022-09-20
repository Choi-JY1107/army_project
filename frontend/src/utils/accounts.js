import request from './request.js'

const requestLogin = (srvno, password) =>
    request.post('/Accounts/login/', {
        srvno: srvno,
        password: password
})

export default requestLogin;