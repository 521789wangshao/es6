let arr = ['wangshao', 'hong'];
let brr = [];
let wang
arr.map((item) => {
    if (item == 'wangshao') {
        item.value = 'wang'
        item.text = '王'
        brr.push(item)
    } else {
        item.value = 'hong'
        item.text = '洪'
        brr.push(item)
    }
    return brr
})

console.log(brr)