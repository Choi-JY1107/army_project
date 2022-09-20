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
    const srvno = req.body.srvno;
    const password = req.body.password;
    const response = {
        status: 0,
        message: "",
    }
    console.log(srvno, password);

    if(srvno=="aa" && password=="aa") {
        response.status=200;
        response.message="success";
    }
    else {
        response.status=404;
        response.message="failed";
    }
    res.status(response.status).send(response);
})

app.listen(port, () => console.log(`Node.js Server is running on port ${port}...`));