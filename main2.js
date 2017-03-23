var http=require('http');
var querystring=require("querystring");

//侦听服务器的request事件
http.createServer(function(req,res){
    var postData="烟光凝而暮山紫，潦水尽而寒潭清23";
    req.setEncoding('utf8');
    //侦听请求的data事件
    req.on('data',function(chumk){
        postData +=chumk;

    })
    //侦听请求的end事件
    req.on('end',function(){
        res.end(postData);
    })
}).listen(8080);
console.log("服务器启动完成");
var user=new Object();
user.name="sunwukong";
user.getname=function(){
    return this.name;
}
user.setname=function(name){
    this.nmae=name;
}
console.log(user);











