/* 
  文件
  
  1、判断当前文件是否是文件
    不存在的文件会报错，可以写文件夹的名字
    stats.isFile() 
      - 返回 true / fasle
  
  2、写入文本
    2.1 异步 fs.writeFile("文件名"，"内容"，"内容格式"，回调函数(err))
      - 文件已存在，替换内容
      - 文件不存在，创建并写入
    2.2 同步 fs.writeFileSync("文件名"，"内容"，"内容格式"，回调函数(err));
      - 文件已存在，替换内容
      - 文件不存在，创建并写入

  3、给文件新增内容
    3.1 异步  fs.appendFile("文件名"，"内容"，回调函数(err));
      - 文件已存在，新增内容
      - 文件不存在，创建并写入
    3.2 同步  fs.appendFileSync("文件名"，"内容"，回调函数(err));
      - 文件已存在，新增内容
      - 文件不存在，创建并写入

  4、更名文件
    fs.rename("原文件名","新文件名",回调函数(err))

  5、删除文件
    fs.unlink("文件名",回调函数(err));

  6、监视文件
    fs.watch("文件名","文件格式",回调函数(evt,fileName));



  文件流
    创建 -> 读取/写入(一个/多个) -> 结果 

    const readStream = fs.createReadStream('./a.txt')
    const writeStream = fs.createWriteStream('./b.txt')

    readStream
      .pipe(writeStream)
*/




// 1、判断当前文件是否是文件。
var stats=fs.statSync(path.join(__dirname,"c.txt"));
console.log(stats.isFile());


// 2、写入文本
// 2.1 异步 
// fs.writeFile("b.txt","你好,这是我第一个写入文本","utf-8",function(err){
//     console.log(err);
// })

// 2.2 同步
// fs.writeFileSync("b.txt","你好,这里同步","utf-8");


// 3、给文件新增内容
// 3.1 异步
// fs.appendFile("a.txt","\n我新增了一行",function(err){
//     console.log(err);
// });

// 3.2 同步
// fs.appendFileSync("a.txt","这是同步新增");

// 4、更名文件
// fs.rename("a.txt","c.txt",function(err){
//     console.log(err);
// })

// 5、删除文件
// fs.unlink("b.txt",function(err){
//     console.log(err);
// })

// 6、监视文件
// fs.watch("./c.txt","utf-8",function(evt,fileName){
//     console.log(evt,fileName);
// });












// 读取文件流
// var files=fs.createReadStream("./a.txt","utf-8");
// var data="";
// files.on("data",function(_data){
//     data+=_data;
// });
// files.on("end",function(){
//     console.log(data);
// })



// 写入文档流
// var txtf=fs.createWriteStream("./a.txt");

// setInterval(function(){
//     txtf.write("\nabc",function(err){

//     });
// },500);



// 写入文件流
// const readStream = fs.createReadStream('./a.txt')
// const writeStream = fs.createWriteStream('./b.txt')
// /* 
//   读取 a.txt 的内容,通过 pipe 管道把流写入 b.txt文件
// */
// readStream   
//   .pipe(writeStream)  



// 写入文件流
/* 错误的写法 ~!!! 读取是需要时间 */
// var txtf=fs.createReadStream("./a.txt");
// console.log(txtf);
// var newTxt=fs.createWriteStream("./b.txt");
// newTxt.write(txtf,"binary",function(err){
//     console.log(err);
// });



// 写入文件流
/* 正确的写法 */
/* var data = '';
// 创建可读流
var readerStream = fs.createReadStream('a.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
   var newTxt=fs.createWriteStream("./b.txt");
    newTxt.write(data,"UTF8",function(err){
    // console.log(err);
    });
});

// readerStream.on('end',function(){
//     // console.log(typeof data);
// });

// readerStream.on('error', function(err){
// //    console.log(err.stack);
// }); */
