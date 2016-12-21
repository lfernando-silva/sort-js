const EDL = require('easy-dependency-loader')
const Order = EDL.load('Order')

module.exports = {
    sort: (list) => {
        sort(list, 0, list.length - 1)
        return list
    }
}

const sort = (list, start, length) => {
    if (length <= start) return null
    let j = partition(list, start, length)
    sort(list, start, j - 1)
    sort(list, j + 1, length)
}

const partition = (list, start, length) => {
    let i = start
    let j = length + 1
    let pivot = list[start]
    while (true) {
        while (list[++i] < pivot) if (i == length) break
        while (pivot < list[--j]) if (j == start) break
        if (i >= j) break
        Order.swap(list, i, j)
    }
    Order.swap(list, start, j)
    return j
}