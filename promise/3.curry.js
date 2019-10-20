//柯里化： 就是一个函数拆分成多个函数
//判断类型 Object.prototype.toString.call

// 高阶函数中包含 柯里化-》可以保留参数 bind
const checkType = type => {
  return content => {
    return Object.prototype.toString.call(content) === `[object ${type}]`;
  };
};
// const b = checkType(123, "Number");

// 闭包
// let types = ["Number", "String", "Boolean"];
// let utils = {};
// types.forEach(type => {
//   utils["is" + type] = checkType(type);
// });
// let isString = checkType("String");
// console.log(isString("123"));
// console.log(utils.isString("456"));

//柯里化怎么实现
// const checkType = (type, content) => {
//   return Object.prototype.toString.call(content) === `[object ${type}]`;
// };

// 通用的柯里化
// const add = (a, b, c, d, e) => {
//   return a + b + c + d + e;
// };

const curry = (fn, arr = []) => {
  let len = fn.length;
  return (...args) => {
    arr = arr.concat(args); // [1] [1,2]
    if (len > arr.length) {
      return curry(fn, arr);
    }
    return fn(...arr);
  };
};

let types = ["Number", "String", "Boolean"];
let utils = {};
types.forEach(type => {
  utils["is" + type] = curry(checkType)(type);
});
console.log(utils.isString("hello"));
// let r = curry(add)(1)(2)(3, 4)(5); //[1,2,3,4,5]
// console.log(r);
