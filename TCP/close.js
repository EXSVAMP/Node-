var http=require("http");
var server=http.createServer(function(req,res){
    if(req.url!=='/favicon.ico'){
        res.on("close",function(){
            console.log("连接被中断");
        })
        setTimeout(function(){
            res.setHeader('Content-Type','text/html');2
            res.write('<html><head><meta charset="utf-8"/></head>');
            res.write("你好world");
            res.end();
        },10000)
    }
}).listen(3333,'localhost');

