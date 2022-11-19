const express = require('express');
const path = require('path');
const app = express();

// app.use
app.use(express.static('./public'));

// app.get
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})

app.all('*', (req,res)=>{
    res.status(404).send('Error 404! Resource not found');
})

app.listen(5000, ()=>{
    console.log("App is listening to port 5000...");
})