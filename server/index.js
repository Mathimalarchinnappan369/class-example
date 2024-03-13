const express = require('express');
const  app = express();
const port = process.env.PORT||5000;
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control_Allow-Headers','Orign, X-Requested-with, Countet-Type,Accept');
    next();
    });

    app.use((req, res, next)=>{
        res.send('Welcome to Express');
    });
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`);
    });