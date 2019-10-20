//事务 开始的时候 做某件事 结束的时候做某件事
const perform = (anymethod, wrappers) => {
  wrappers.forEach(wrap => {
    wrap.initilizae();
  });
  anymethod();
  wrappers.forEach(wrap => {
    wrap.close();
  });
};

perform(() => {
  console.log("说话");
}, [
  {
    // warpper
    initilizae() {
      console.log("您好");
    },
    close() {
      console.log("再见");
    }
  },
  {
    // warpper
    initilizae() {
      console.log("您好1");
    },
    close() {
      console.log("再见1");
    }
  }
]);

//柯里化：我们可以把一个大函数拆分成很多具体的功能

let fn = (a, b, c) => {};

console.log(fn.length);
