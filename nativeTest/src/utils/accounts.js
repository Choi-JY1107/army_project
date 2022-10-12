import request from './request.js'

export const requestLogin = (srvno, password) =>
    request.post('/Accounts/login', {
        userId: srvno,
        userPw: password
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const requestLogout = () =>
    request.get('/Accounts/logout', {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const requestSearch = (srvno) =>
    request.get('/Accounts/' + srvno, {
            headers: {
                'AUTHORIZATION': 'jwt ', // + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
}})

export const requestList = () =>
    request.get('/Accounts/list', {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})