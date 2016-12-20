module.exports = {
    sort: function (list, length) {
        var swap;
        for (var i = length / 2; i >= 0; i--) buildHeap(list, length, i);
        while (length > 0) {
            swap = list[0];
            list[0] = list[length - 1];
            list[length - 1] = swap;
            buildHeap(list, --length, 0);
        }
        return list;
    }
};

function buildHeap(list, length, k) {
    var j = null;
    var value = list[k];
    while (k < length / 2) {
        j = 2 * k + 1;
        if (j < length - 1 && list[j] < list[j + 1]) j++;
        if (value >= list[j]) break;
        list[k] = list[j];
        k = j;
    }
    list[k] = value;
}





