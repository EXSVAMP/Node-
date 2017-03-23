var net=require("net");
var server=net.createServer(function(socket){
      console.log("客户端与服务器端连接已建立");
      server.getConnections(function(err,count){
          console.log('当前存在%d个客户端连接',count);
          server.maxConnections=2;
          console.log('TCP服务器的最大连接数为%d',server.maxConnections);
      });
      server.close(function(){
          console.log('TCP服务器被关闭');
      })
})
// server.on('close',function(){
//     console.log("TCP服务器被关闭");
// })
server.listen(3333,'localhost',function(){
    console.log("服务器端开始监听")
})