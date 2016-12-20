var aux = [];

module.exports = {
    sort: function (list) {
        sort(list, 0, list.length - 1);
        return list;
    }
};

function sort(list, start, length) {
    if (length <= start) return true;
    var pivot = start + (length - start) / 2;
    sort(list, start, pivot);
    sort(list, pivot + 1, length);
    merge(list, start, pivot, length);
}

function merge(list, start, pivot, length) {
    var i = start;
    var j = pivot + 1;
    for (var k = start; k <= length; k++) aux[k] = list[k];
    for (var k = start; k <= length; k++)
        if (i > pivot) list[k] = aux[j++];
        else if (j > length) list[k] = aux[i++];
        else if (aux[j] < aux[i]) list[k] = aux[j++];
        else list[k] = aux[i++];
}

