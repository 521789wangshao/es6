


//有一个函数可以接收一个函数， 可以根据条件选择这个函数

// function after(times, callback) {
//     return function () {
//         if (--times === 0) {
//             callback();
//         }
//     }
// }
// let fn = after(3, function () {
//     console.log('fn被调用了三次')
// });

// fn();
// fn();
// fn();

// 读一个文件3s后才能获取结果

// function read(callback) {
//     setTimeout(() => {
//         let r = 'zfe'
//         callback(r)
//     }, 3000)
// }

// read(function (result) {
//     console.log(result)
// })


// 文件读取
let fs = require('fs') // fileSystem
//readFile 第一个参数是路径，如果用coderunner 目录指向的都是当前运行的根目录，编码 回调(err 所有的医不方法都需要捕获错误，但是不能try catch)

// 异步回调嵌套的问题 会导致代码难以维护， 而且不方便处理错误
// fs.readFile('./1.txt', 'utf8', function (err, data) {
//     fs.readFile(data, 'utf8', function (err, data) {
//         console.log(data)
//     });
// });


//多个异步同时执行，在某一个时刻拿到最终的结果

let school = {};
// 哨兵函数
// let obj = { name: 'zf' };
// console.log(Object.keys(obj))
function out() {
    if (Object.keys(school).length === 3)
        console.log(school)
}
fs.readFile('./1.txt', 'utf8', function (err, data) {
    school.name = data;
    out()
});
fs.readFile('./2.txt', 'utf8', function (err, data) {
    school.age = data;
    out();
});
fs.readFile('./add.txt', 'utf8', function (err, data) {
    school.tag = data;
    out();
});
