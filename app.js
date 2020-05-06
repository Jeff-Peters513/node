"use strict"

let user = {
    id: 1,
    userName: "jp",
    password: "da-Man",
    firstName: "Jeff",
    lastName: "Peters",
    phoneNumber: "513-305-1268",
    email: "peters.j@yahoo.com",
    reviewer: true,
    admin: true,
};


const url = "http://localhost:8080";

const express = require("express");
const app = express();
const port = 8181;
const getJSON = require("get-json");

app.get("/users/:id", (req, res) => {
    let id = req.params.id;
    getJSON(`${url}/users/${id}`, (err,resp)=>{
        if(res) res.send(resp);
        if(err) res.send(err);
    });
   
});


app.get("/", (request, response) => {
    response.send("Express web server is ready...");
});

app.listen(port, () => {
    console.log(`Express Server listening on port ${port}`);

});

app.get("/about", (req, res)=> {
    res.send("Jeff Peters<br> Max Techincal Student");
    
});

