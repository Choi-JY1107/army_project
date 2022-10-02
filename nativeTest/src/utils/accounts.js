import request from './request.js'

export const RequestLogin = (userId, userPw) =>
    request.post('/Accounts/login', {
        userId: userId,
        userPw: userPw
    }, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const RequestLogout = () =>
    request.get('/Accounts/logout', {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const RequestSearch = (userId) =>
    request.get('/Accounts/' + userId, {
            headers: {
                'AUTHORIZATION': 'jwt ', // + token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
}})

export const RequestList = () =>
    request.get('/Accounts/list', {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})