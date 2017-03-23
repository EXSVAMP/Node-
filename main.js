
//1.阻塞代码实例

// var fs=require("fs");
// var data=fs.readFileSync("input.txt");
//  console.log(data.toString());
//  console.log("程序执行结束");


//2.非阻塞代码实例
var fs=require('fs');
fs.readFile('input.txt',function(err,data){
    if(err)return console.error(err);
    console.log(data.toString());
})
console.log("程序执行结束");
console.log("<===模块文件的路径==>"+__filename);
console.log("<===当前执行脚本所在的目录==>"+__dirname);

function printHello(){
    console.log("Hello,World!");
}
setInterval(printHello,1000);