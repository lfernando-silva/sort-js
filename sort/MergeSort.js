const aux = []

module.exports = {
    sort: list => {
        sort(list, 0, list.length - 1)
        return list
    }
}

const sort = (list, start, length) => {
    if (length <= start) return null
    let pivot = start + (length - start) / 2
    sort(list, start, pivot)
    sort(list, pivot + 1, length)
    merge(list, start, pivot, length)
}

const merge = (list, start, pivot, length) => {
    let i = start
    let j = pivot + 1
    for (let k = start; k <= length; k++) aux[k] = list[k]
    for (let k = start; k <= length; k++)
        if (i > pivot) list[k] = aux[j++]
        else if (j > length) list[k] = aux[i++]
        else if (aux[j] < aux[i]) list[k] = aux[j++]
        else list[k] = aux[i++]
}

