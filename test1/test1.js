process.stdout.write("子进程当前工作目录："+process.cwd());
process.argv.forEach(function(val,index,array){
    process.stdout.write("\r\n"+index+":"+val);

})
