import request from './request.js'

export const AccountsLogin = (srvno, password) =>
    request.post('/Accounts/login', {
        srvno: srvno,
        password: password
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const AccountsLogout = () =>
    request.get('/Accounts/logout', {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const AccountsSearch = (srvno) =>
    request.get('/Accounts/' + srvno, {
            headers: {
                'AUTHORIZATION': 'jwt ', // + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
}})

export const AccountsList = () =>
    request.get('/Accounts/list', {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})