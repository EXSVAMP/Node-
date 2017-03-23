
var net=require('net');
var file=require('fs').createWriteStream("./message.txt");
var server=net.createServer();
server.on('connection',function(socket){
    socket.pipe(file,{end:false});
    setTimeout(function(){
        file.end("秦时明月");
        socket.unpipe(file);
    },3000)
})
server.listen(3333,"localhost");
