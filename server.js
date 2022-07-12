const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("livingRoom/livingRoomAssets"));
app.use(express.static("eventSim/eventSimAssets"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/livingRoom/index.html");
});

app.get("/simulator", function(req, res){
  res.sendFile(__dirname + "/eventSim/simulator.html");
});


app.listen(port);
