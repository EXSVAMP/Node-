
var http=require('http');
var events=require('events');
var server=http.createServer();
server.on('request',(req,res)=>{
    if(req.url!=='/favicon.ico'){
        console.log("接收到客户端请求");
    }
});

server.on('request',(req,res)=>{
    if(req!=="/favicon.ico"){
        console.log(req.url);
    }
    res.end();
});
server.on('request',(req,res)=>{
    if(req.url!=='/favicon.ico'){
        console.log("发送响应完毕")
    }
});
server.listen(1338,'127.0.0.1');
console.log(events.EventEmitter.listenerCount(server,'request'))