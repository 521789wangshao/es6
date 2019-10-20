let fs = require('fs') // fileSystem
// 发布订阅 先把需要的内容保存到队列里，当发布时让数组中的函数依次执行即可
let school = {};
let Dep = {
    arr: [],
    on(fn) {
        this.arr.push(fn)
    },
    emit() {
        if (Object.keys(school).length === 3) {
            this.arr.forEach(function (fn) {
                fn()
            })
        }
    }
}
// 观察者模式基于发布订阅 vue 观察者模式
Dep.on(function () {
    console.log(school);
})

Dep.on(function () {
    console.log('代码执行结束了');
});

fs.readFile('./1.txt', 'utf8', function (err, data) {
    school.name = data;
    Dep.emit()
});
fs.readFile('./2.txt', 'utf8', function (err, data) {
    school.age = data;
    Dep.emit()
});
fs.readFile('./add.txt', 'utf8', function (err, data) {
    school.tag = data;
    Dep.emit()
});


// 发布订阅模式
