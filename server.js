const express = require("express");
const path = require("path");

const app = express();


app.get('/',function(res,req){
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(process.env.PORT || 3000,()=>
    console.log("Server is listening")
)