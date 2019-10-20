//实现深拷贝的几种方式

// 对象如果只有一层可以使用Object.assign()
// let obj1 = { a: 10, b: 20, C: 30 }
// let obj2 = Object.assign({}, obj1);
// obj2.b = 100;
// console.log(obj1);
// { a: 10, b: 20, C: 30 }
// console.log(obj2)
// { a: 10, b: 100, C: 30 }




// 转成JSON再转回来
// let obj1 = { a: { a: 1, b: 'wh' } }
// let str = JSON.stringify(obj1);
// let obj2 = JSON.parse(str)
// console.log(str);
// console.log(obj2);
// let cloneObj = function (obj) {
//     let str, newObj = obj.constructor === Array ? [] : {};
//     if (typeof obj !== 'object') {
//         return;
//     } else if (JSON) {
//         str = JSON.stringify(obj), //系列化对象
//             newObj = JSON.parse(str); //还原
//     } else {
//         for (let i in obj) {
//             newObj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i]
//         }
//     }
//     return newObj;
// }
// let obj1 = { a: { a: 1, b: 'ww' } }
// let obj2 = cloneObj(obj1);
// obj2.a.a = 2;
// console.log(obj1);
// console.log(obj2); 



// 递归拷贝
// function deepClone(initalObj, finalObj) {
//     let obj = finalObj || {};
//     for (let i in initalObj) {
//         let prop = initalObj[i]; // 避免相互引用对象导致死循环， 如initalObj.a= initalObj
//         if (prop === obj) {
//             continue;
//         }
//         if (typeof prop === 'object') {
//             obj[i] = (prop.constructor === Array) ? [] : {};
//             arguments.callee(prop, obj[i]);
//         } else {
//             obj[i] = prop;
//         }
//     }
//     return obj;
// }

// let str = {};
// let obj = { a: { a: 'hello', b: 21 } };
// deepClone(obj, str);
// console.log(str.a)



// 使用Object.create()方法
// function deepClone(initalObj, finalObj) {
//     let obj = finalObj || {};
//     for (let i in initalObj) {
//         let prop = initalObj[i];
//         if (prop === obj) {
//             continue
//         }

//         if (typeof prop === 'object') {
//             obj[i] = (prop.constructor === Array) ? [] : Object.create(prop)
//         } else {
//             obj[i] = prop;
//         }
//     }
//     return obj
// }

// let str = {};
// let obj = { a: { a: 'hello', b: 21 } };

// deepClone(obj, str);
// console.log(str.a)


// jquery 有提供一个$.extend可以用来做 Deep Copy。
// let $ = require('jquery');
// let obj1 = {
//     a: 1,
//     b: { f: { g: 1 } },
//     c: [1, 2, 3]
// };
// let obj2 = $.extend(true, {}, obj1);
// console.log(obj1.b.f === obj2.b.f);
// false

// let _ = require('lodash');
// let obj1 = {
//     a: 1,
//     b: { f: { g: 1 } },
//     c: [1, 2, 3]
// };
// let obj2 = _.cloneDeep(obj1);
// console.log(obj1.b.f === obj2.b.f);
// false

// let str = 'abc';
// console.log(str[1] = 'f');



//内部方法： 用户合并一个或多个对象到第一个对象
//参数
//target 目标对象 对象都合并到target里
//sourse 合并对象
//deep 是否执行深度合并
function extend(target, sourse, deep) {
    for (key in sourse)
        if (deep && (isPlainObject(sourse[key]) || isArray(sourse[key]))) {
            //sourse[key] 是对象， 而target[key] 不是对象， 则target[key] = {} 初始化一下 否则递归出错
            if (isPlainObject(sourse[key] && !isArray(target[key])))
                target[key] = {};
            //sourse[key] 是对象， 而target[key] 不是对象， 则target[key] = {} 初始化一下 否则递归出错
            if (isArray(sourse[key]) && !isArray(target[key]))
                target[key] = []
            // 执行递归
            extend(target[key], source[key], deep)
        }
        // 不满足以上条件， 说明 source[key] 是一般的值类型， 直接给 target 就是了
        else if (sourse[key] !== undefined) target[key] = source[key]
}

// Copy all but undefined properties from one or more
// objects to the `target` object.
$extend = function (target) {
    let deep, args = slice.call(arguments, 1);

    //第一个参数为boolean值时， 表示是否深度合并
    if (typeof target == 'boolean') {
        deep = target;
        //target取第二个参数
        target = args.shift()
    }
    args.forEach(arg => {
        extend(target, arg, deep)
        return target
    });
}