var net=require('net');
var server=net.createServer();
server.on('connection',function(socket){
    socket.setEncoding("utf-8");
    socket.on('data',function(data){
        console.log(data);
    });
    socket.on('end',function(){
        console.log('客户端连接被关闭');
    })
})
server.listen(3333,'localhost');