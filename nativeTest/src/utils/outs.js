import request from './request.js'

export const OutsGet = (outId) =>
	request.get('/outs/' + outId, {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const OutsDelete = (outId) =>
	request.delete('/outs/' + outId, {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const OutsUpdate = (outId, name, srvno, telno, rank, position, unitId, level) =>
	request.post('/outs/change', {
		outId: outId,
		name: name,
		srvno: srvno,
		telno: telno,
		rank: rank,
		position: position,
		unitId: unitId,
		level: level
	}, {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const OutsCreate = (name, srvno, telno, rank, position, unitId, level) =>
	request.post('/outs/create', {
		name: name,
		srvno: srvno,
		telno: telno,
		rank: rank,
		position: position,
		unitId: unitId,
		level: level
	}, {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})

export const OutsMonthlyList = (year, month) =>
	request.get('/outs/list?year=' + year + '&month=' + month, {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})


export const OutsDailyList = (year, month, day) =>
	request.get('/outs/list?year=' + year + '&month=' + month + '&day=' + day, {
        headers: {
            'AUTHORIZATION': 'jwt ', // + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
}})