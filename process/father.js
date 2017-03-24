var cp=require("child_process");
var fs=require("fs");
var out=fs.openSync("message.txt");
var sp=cp.spawn("node",['write.js'],{
    detached:true,
    stdio:['ignore',out,'ignore']
});
sp.unref();