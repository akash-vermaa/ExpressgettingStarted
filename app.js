const express = require('express');

const app = express();

// request -> middleware -> response
const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    next();
}

// home page
app.get('/',logger, (req, res)=>{
    res.send("Home")
})

// about page
app.get('/about',logger, (req, res)=>{
    res.send("about")
})

app.listen(5000, ()=>{
    console.log("App listening to port 5000...");
})