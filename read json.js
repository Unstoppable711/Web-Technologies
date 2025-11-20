n
import express from "express";
import data from "'/data/data.json" with {type: 'json'};
const app=express;
const PORT=3000;

//Simple get function
app.get("/", (req, res)=>{
//res. send ("This is a GET method request at /");
res.json (data);
res.send (req.params) ;
}); 

app. listen(PORT, ()=>{
console.log ('The server is running on the port number ${PORT}');
// console. log("json data capture sucessfully");
console. log("json data capture successfully");
});