/* 
    文件夹
    
    1、创建文件夹
        fs.mkdir("文件夹名",回调函数)

    2、删除文件夹
        fs.rmdir("文件夹名",回调函数)

    3、判断是否有文件夹
        fs.existsSync("文件夹名")
            - 返回 true/false

    4、读取文件文本内容
        4.1 fs.readFile("文件夹名"，{读取格式}，回调函数(err,data))
            - 没有返回值
        4.2 fs.readFile("文件夹名"，"读取格式"，回调函数(err,data))
            - 没有返回值
        4.3 fs.readFile("文件夹名"，"读取格式").then(回调函数"(err,data))
            - 返回 Promise 的状态

    5、读取文件夹
        5.1 异步读取文件夹
        fs.readdir(__dirname,"读取格式",回调函数(err,data))
            - 回调函数返回的是一个数组，数组包含了当前文件夹中所有的文件和文件夹
        5.2 同步读取文件夹
        fs.readdirSync(__dirname,"读取格式");
            - 返回的是一个数组，数组包含了当前文件夹中所有的文件和文件夹

    6、读取文件状态
        6.1 异步 fs.stat("路径",回调函数(err,stats));
            回调函数内 stats 是一个大对象，各类数据，创建日期，修改日期等等
            里面有很多个方法，
            stats.isDirectory() 当前文件是否是文件夹
                - 返回 true / fasle
            stats.isFile() 当前文件是否是文件
                - 返回 true / fasle
        6.2 同步 fs.statSync()
*/
    

// 1、创建文件夹
// fs.mkdir("./js",function(err){
//     console.log(err);
// })

// 2、删除文件夹
// fs.rmdir("./b",function(err){
//     console.log(err);
// })

// 3、判断是否有文件夹
// console.log(fs.existsSync("./js"));

// 4、读取文件文本内容
// 第一种
// fs.readFile("./a.txt",{encoding:"utf-8"},function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// 第二种
// fs.readFile("./a.txt","utf-8",function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// 第三种
// 创造一个promise来读取本地文件
// function readfiles(file){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(file,"utf-8",(err,data)=>{
//             if(err) reject(err);
//             else resolve(data);
//         })
//     })
// }

// readfiles("./a.txt").then(data=>{
//     console.log(data);
// })

// 第四种
// 模块自带的promise
// fs.promises.readFile("./a.txt","utf-8").then(function(data){
//     console.log(data);
// })


// 同步读取本地文件  不建议大家使用
// var txt=fs.readFileSync("./a.txt","utf-8");
// console.log(txt);


// 5、读取文件夹
// 异步
// fs.readdir(__dirname,"utf-8",function(err,data){
//     console.log(data);
//     // 读取到将是一个数组，数组包含了当前文件夹中所有的文件和文件夹
// })

// 同步
// var list=fs.readdirSync(__dirname,"utf-8");
// console.log(list)

// 6、读取文件状态
// fs.readdir(__dirname,"utf-8",function(err,data){
//    data.forEach(item=>{
//         var itempath=path.join(__dirname,item)
//         fs.stat(itempath,function(err,state){  // fs.stat(path,callback);读取文件状态
//             console.log(item,state.isDirectory());
//         })
//    })

//     // for(var i=0;i<data.length;i++){
//     //     var itempath=path.join(__dirname,data[i])
//     //     fs.stat(itempath,function(err,state){
//     //         console.log(data[i],state.isDirectory());
//     //     })
//     // }
// })

// 同步写法
// fs.readdir(__dirname,"utf-8",function(err,data){
//     data.forEach(item=>{
//          var itempath=path.join(__dirname,item)
//         var state=fs.statSync(itempath);
//         console.log(item,state.isDirectory());
//     })
//  })
