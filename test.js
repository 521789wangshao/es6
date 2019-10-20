let arr = ['wangshao', 'hong', 'jiayou'];


function arr(tag) {
    let one = ''
    switch (tag) {
        case 'tag':
            one = '王少'
            break;
    }
    return one
}
arr.forEach(item => {
    switch (item) {
        case 'wangshao':
            item.value = 'wangshao'
            item.text = '王少'
            break;
        case 'hong':
            item.value = 'hong'
            item.text = '洪'
            break;
        case 'jiayou':
            item.value = 'jiayou'
            item.text = '加油'
            break;
    }
})

console.log(arr)
