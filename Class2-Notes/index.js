var express = require('express');

var app = express()

app.get('/', function(res,res){
  res.send("hello world");
  }
)

//listening server
app.listen(8000, function (){
  console.log('first server started on port 8000')
});
