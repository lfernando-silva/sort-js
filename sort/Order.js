module.exports = {
    isOrdered: function (list) {
        for (var i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) return false
        }
        return true
    },
    swap: function (list, start, j) {
        var t = list[start]
        list[start] = list[j]
        list[j] = t
    }
}