var express = require('express');
var app = express();
var server = require('http').Server(app); // le pasamos la palicacion express
var  io = require('socket.io')(server);
var five = require("johnny-five");
var board = new five.Board();


app.use(express.static('public'));
app.get('/', function(req,res){
  	res.status(200).send("Hello world");
	});


board.on("ready", function() {
  				console.log("Arduino conectado");
  				var ledserver = new five.Led(2);
  				ledserver.on();
          var led = new five.Led(3);
          var led2 = new five.Led(4);
          var led3 = new five.Led(5);
          var led4 = new five.Led(6);
          io.on('connection', function(socket){
           console.log('alguien se a conectado ');
            
              socket.on('on-led',function(data){
                console.log("Cuaro encendido");
                
                 
                  led.on();           
              });
              socket.on('off-led',function(data){
                console.log("Cuarto apagado");
                
                  
                  led.off();           
              });
              socket.on('on-led2',function(data){
                console.log("Cuarto encendido");
                
                 
                  led2.on();           
              });
              socket.on('off-led2',function(data){
                console.log("Cuarto apagado");
                
                  
                  led2.off();           
              });
              socket.on('on-led3',function(data){
                console.log("Cuarto encendido");
                
                 
                  led3.on();           
              });
              socket.on('off-led3',function(data){
                console.log("Cuarto apagado");
                
                  
                  led3.off();           
              });
              socket.on('on-led4',function(data){
                console.log("Cuarto encendido");
                
                 
                  led4.on();           
              });
              socket.on('off-led4',function(data){
                console.log("Cuarto apagado");
                
                  
                  led4.off();           
              });
          });

  			});






server.listen(8080, function(){
  console.log("el servidor esta corriendo");
});
