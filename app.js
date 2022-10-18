const express = require("express");

const app = express();

let port = process.env.PORT;

if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function() {
    console.log("Server has started successfully.");
});

// app.get("/", function(req, res){
//     res.sendFile(__dirname + "/index.html");
// });