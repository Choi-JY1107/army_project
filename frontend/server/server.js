const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})

app.get('/', function(req, res){
    res.send('Hello');
})

app.get('/hi', function(req, res){
    res.send('Hello');
})