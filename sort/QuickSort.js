var EDL = require('easy-dependency-loader')
var Order = EDL.load('Order')

module.exports = {
    sort: function (list) {
        sort(list, 0, list.length - 1)
        return list
    }
}

function sort(list, start, length) {
    if (length <= start) return true
    var j = partition(list, start, length)
    sort(list, start, j - 1)
    sort(list, j + 1, length)
}

function partition(list, start, length) {
    var i = start
    var j = length + 1
    var pivot = list[start]
    while (true) {
        while (list[++i] < pivot) if (i == length) break
        while (pivot < list[--j]) if (j == start) break
        if (i >= j) break
        Order.swap(list, i, j)
    }
    Order.swap(list, start, j)
    return j
}