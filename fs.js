let fs = require('fs');

fs.mkdir('js', function (error) {
  if (error) {
    return false;
  }
  console.log('创建目录成功');
});

fs.writeFile('./js/index.js', 'var a = "nihao"', function (error) {
  if (error) {
    return false;
  }
  console.log('写入成功');
});

fs.appendFile('./js/index.js', '这是写入的内容\n', function (error) {
  if (error) {
    console.log(error);
    return false;
  }
  console.log('写入成功');
});

fs.readFile('./js/index.js', function (error, files) {
  if (error) {
    console.log(error);
    return false;
  }
  let result = files.toString().replace('这是写入的内容', '');
  console.log(files.toString());
  fs.writeFile('./js/index.js', result, function (error) {
    if (error) {
      return false;
    }
    console.log('修改成功');
  })
});

fs.appendFile('./js/index.html', '这是写入的内容,测试', function (error) {
  if (error) {
    console.log(error);
    return false;
  }
  console.log('写入成功');
});

// var http = require('http');

// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);

// // 终端打印如下信息
// console.log('Server running at http://localhost:8888/');

