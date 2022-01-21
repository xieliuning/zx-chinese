// path 大多数用来针对本地路径
// url 是针对网络路径的

/* 
  path

  1、合并路径                
  path.join("文件名一"，"文件名二")
    - 返回合并后的路径

  2、获取路径名称
  path.dirname("路径名称")
    - 返回去除最底层文件的路径

  3、读取文件名，去掉扩展名   
  path.basename("路径名"，"需要去除的扩展名")
    - 返回最底层文件名

  4、读取文件扩展名          
  path.extname("路径")
    - 返回拓展名

  5、解析路径
  path.parse("路径")
    - 返回一个路径的obj

  6、解析路径对象
  path.format(obj)
    - 返回路径（字符串）

  // 全局的本地路径
  // console.log(__dirname);
  // 全局当前文件的本地路径和文件名
  // console.log(__filename);
*/


// 1、合并路径 
// var str=path.join("/a","/b");  // /a/b
// var str=path.join("/a","b");  // /a/b
// var str=path.join("/a/","/b/");  // /a/b/   
// console.log(str);


// 2、获取路径名称
// var str=path.dirname("/a/index.html"); // /a
// var str=path.dirname("/app/news/index.html");// /app/news
// var str=path.dirname("http://www.163.com/app/news/index.html");
// console.log(str);


// 3、读取文件名，去掉扩展名   
// var str=path.basename("/a/b.txt",".txt"); // b
// var str=path.basename("/a/b.txt"); // b.txt
// var str=path.basename("D://xietian/a/b/c/index.html",".html"); // index
// console.log(str);


// 4、读取文件扩展名    
// var str="/a/b.txt";
// console.log(path.extname(str))  // .txt
// console.log(path.basename(str,path.extname(str))); // b 


// 5、解析路径
// var str="http://www.163.com/app/news/index.html";
// console.log(path.parse(str));


// 6、解析路径对象
// var obj={
//     root: '',
//     dir: 'http://www.163.com/app/news',
//     base: 'index.html',
//     ext: '.html',
//     name: 'index'
//   }
// console.log(path.format(obj))

// var str="D:\\dir\\app\\index.html";
// console.log(path.dirname(str)); 
// console.log(path.parse(str)); 

// var obj={
//     root: 'D:\\',
//     dir: 'D:\\dir\\app',
//     base: 'index.html',
//     ext: '.html',
//     name: 'index'
//   }
// console.log(path.format(obj));


// 全局的本地路径
// console.log(__dirname);
// 全局当前文件的本地路径和文件名
// console.log(__filename);

// 创建文件夹
// await $`mkdir ${path.join('../5_path', 'output')}`
