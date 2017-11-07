var express = require('express'); //make express available
var app = express(); //invoke express
var server = require('http').Server( app ) // start the express server instance
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets

//serve out any static files in our public HTML folder
app.use(express.static('public'))

//do something when someone connects to our page.
io.on('connection', function(socket){
  console.log(socket.id); // log out the unique ID of each person who connects

  ///hang out and wait for a message from ANY clinet.
  socket.on('sendSurveyAnswers',function(surveyAnswers){
    //we got one, re route it to the projection.
    io.emit('projectionRouteSurveyAnswers', surveyAnswers)
  })

})


//makes the app listen for requests on port 3000
// server.listen(3000, function(){
//   console.log("app listening on port 3000!")
// })

var port = process.env.PORT || 3000;
server.listen(port, function(){
  console.log("app listening on port: " + port)
})
