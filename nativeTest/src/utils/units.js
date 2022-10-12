import request from './request.js'

export const UnitsCreate = (name) =>
	request.post('/units/create', {
		name: name
	}, {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const UnitsList = () =>
	request.get('/units/list', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})
