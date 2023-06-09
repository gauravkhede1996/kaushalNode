const express=require('express');
const port=8000;
const app=express();
const db=require('./config/mongoose');
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){ console.log(err); return;}
    console.log("Server is up and running at port",port);
})