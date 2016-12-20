var EDL = require('easy-dependency-loader');
var Promise = EDL.load('bluebird');

var fs = Promise.promisifyAll(EDL.load('fs'));

EDL.setDependencies({
    'HeapSort': './sort/HeapSort.js',
    'QuickSort': './sort/QuickSort.js',
    'MergeSort': './sort/MergeSort.js',
    'Order': './sort/Order.js'
});

var Order = EDL.load('Order');
var HeapSort = EDL.load('HeapSort');
var MergeSort = EDL.load('MergeSort');
var QuickSort = EDL.load('QuickSort');

function sort(data) {
    var tasks = [
        HeapSort.sort(data, data.length),
        MergeSort.sort(data),
        QuickSort.sort(data)
    ];
    return Promise
        .all(tasks)
        .then(function (results) {
            return results;
        });
}

function areOrdered(lists){
    var tasks = [
        Order.isOrdered(lists[0]),
        Order.isOrdered(lists[1]),
        Order.isOrdered(lists[2]),
    ];
    return Promise
        .all(tasks)
        .then(function (results) {
            return results;
        })
}

function start() {
    return Promise
        .resolve('./data/data.txt')
        .then(fs.readFileAsync)
        .then(sort)
        .then(areOrdered)
        .then(function (results) {
            console.log('Heapsort %s', results[0] === true ? 'is ordered' : 'is NOT ordered');
            console.log('Mergesort %s', results[1] === true ? 'is ordered' : 'is NOT ordered');
            console.log('Quicksort %s', results[2] === true ? 'is ordered' : 'is NOT ordered');
            return null;
        });
}

start();




