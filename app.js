const EDL = require('easy-dependency-loader')
const Promise = EDL.load('bluebird')

const fs = Promise.promisifyAll(EDL.load('fs'))

EDL.setDependencies({
    'HeapSort': './sort/HeapSort.js',
    'QuickSort': './sort/QuickSort.js',
    'MergeSort': './sort/MergeSort.js',
    'Order': './sort/Order.js'
})

const Order = EDL.load('Order')
const HeapSort = EDL.load('HeapSort')
const MergeSort = EDL.load('MergeSort')
const QuickSort = EDL.load('QuickSort')

const sort = data => {
    let tasks = [
        HeapSort.sort(data, data.length),
        MergeSort.sort(data),
        QuickSort.sort(data)
    ]
    return Promise
        .all(tasks)
        .then(results => {
            return results
        })
}

const areOrdered = lists =>{
    let tasks = [
        Order.isOrdered(lists[0]),
        Order.isOrdered(lists[1]),
        Order.isOrdered(lists[2]),
    ]
    return Promise
        .all(tasks)
        .then(results => {
            return results
        })
}

const start = () => {
    return Promise
        .resolve('./data/data.txt')
        .then(fs.readFileAsync)
        .then(sort)
        .then(areOrdered)
        .then(Order.getOrderMessage)
        .then(results => {
            console.log(results);
            return null
        })
}

start()




