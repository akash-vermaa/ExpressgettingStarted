// import libraries
const express = require('express');
const path = require('path');

// import data
const {products, people} = require('./data');

// intialize app
const app = express()

// APP Global parameters
const HOSTNAME = 'localhost';
const PORT = 5000;
const APP_VERSION = 'v1';

// import eb static files
app.use(express.static('./public'));

// home page
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './JSON/index.html'));
})

app.get(`/api/${APP_VERSION}`, (req, res)=>{
    res.status(200).json(products);
})

app.get(`/api/${APP_VERSION}/products`, (req, res)=>{
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product)=> {
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    const newProducts = sortedProducts.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image};
    })
    if(sortedProducts.length > 0) res.status(200).json(newProducts);
    else res.status(200).send("<p>no product did not match your seach.</p>");
})

app.get(`/api/${APP_VERSION}/products/:productID`, (req, res)=>{
    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id===Number(productID));
    if(!singleProduct) res.status(404).send("Error 404! Product not found");
    else res.status(200).json(singleProduct);
})

app.get(`/api/${APP_VERSION}/people`, (req, res)=>{
    res.status(200).json(people);
})
app.get(`/api/${APP_VERSION}/people/:peopleID`, (req, res)=>{
    const {peopleID} = req.params;
    console.log(req.query);
    const foundPeople = people.find((peop)=> peop.id === Number(peopleID));
    if(!foundPeople) res.status(404).send("Error 404! People not found");
    else res.status(200).json(foundPeople);
})

app.all('*',(req,res)=>{
    res.status(404).send("Error 404")
})

app.listen(PORT, ()=>{
    console.log(`App listening on port : ${PORT}`);
})