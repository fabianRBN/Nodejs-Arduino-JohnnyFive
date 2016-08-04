var socket = io.connect('http://localhost:8080',{'forceNew':true});



function onled() {
	socket.emit('on-led');   
	   
}
function offled() {
	   
	socket.emit('off-led');    
}
function onled2() {
	socket.emit('on-led2');   
	   
}
function offled2() {
	   
	socket.emit('off-led2');    
}
function onled3() {
	socket.emit('on-led3');   
	   
}
function offled3() {
	   
	socket.emit('off-led3');    
}
function onled4() {
	socket.emit('on-led4');   
	   
}
function offled4() {
	   
	socket.emit('off-led4');    
}

