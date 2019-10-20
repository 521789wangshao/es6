// 文件读取
let fs = require('fs') // fileSystem
//多个异步同时执行，在某一个时刻拿到最终的结果

let school = {};
// 哨兵函数
// let obj = { name: 'zf' };
// console.log(Object.keys(obj))
function after(times, callback) {
    return function () {
        if (--times === 0) {
            callback(school);
        }
    }
}
let out = after(3, function (data) {
    console.log(data)
})

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


// 发布订阅模式
