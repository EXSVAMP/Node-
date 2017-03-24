process.stdin.resume();
process.stdin.on('data',function(chunk){
    process.stdout.write('进程接收到数据'+chunk);
})
process.argv.forEach(function(val,index,array){
    console.log(index+":"+val);
})