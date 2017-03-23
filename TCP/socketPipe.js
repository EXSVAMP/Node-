var net=require('net');
var file=require('fs').createWriteStream("./message.txt");
var server=net.createServer();
server.on('connection',function(socket){
    socket.pipe(file);
    socket.on('data',function(data){

        console.log("<====客户端发送过来的数据====>"+data.toString());
    })
})
server.listen(3333,"localhost");
