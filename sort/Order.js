module.exports = {
    isOrdered: (list) => {
        for (var i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) return false
        }
        return true
    },
    swap: (list, start, j) =>{
        var t = list[start]
        list[start] = list[j]
        list[j] = t
    },
    getOrderMessage: (isOrdereds) => {
        return ['\nHeapSort','\nMergeSort','\nQuickSort'].map((e, i) => {
            return e += isOrdereds[i]
                ? ' is Ordered'
                : 'is not Ordered'
        }).toString()
    }
}