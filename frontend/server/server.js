const express = require('express');
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/Accounts/login', (req, res) => {
    const srvno = req.body.userId;
    const password = req.body.userPw;
    console.log("로그인", srvno, password);

    if(srvno=="aa" && password=="aa") res.status(200).send({message: 'success'})
    else res.status(404).send({message: 'failed'});
})

app.get('/Accounts/logout', (req, res) => {
    console.log("로그아웃")
    res.status(200).send({message: 'success'})
})

app.get('/Accounts/:userId', (req, res, next) => {
    const srvno = req.params.userId
    console.log("계정조회", srvno)
    res.status(200).send({message: 'success'})
})

app.get('/Accounts/list', (req, res) => {
    console.log("리스트")
    res.status(200).send({message: 'success'})
})

app.listen(port, () => console.log(`Node.js Server is running on port ${port}...`));