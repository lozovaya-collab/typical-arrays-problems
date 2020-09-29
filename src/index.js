exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0
    }
    if (array.length > 0) {
        let arrayOfValue = array
        let minValue = arrayOfValue[0]
        for (let i = 1; i < arrayOfValue.length; i++) {
            if (minValue > arrayOfValue[i]) {
                minValue = arrayOfValue[i]
            }
        }
        return minValue
    }
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0
    }
    if (array.length > 0) {

        let arrayNew = array
        if (arrayNew.length === 0) return 0
        let maxValue = arrayNew[0]
        for (let i = 1; i < arrayNew.length; i++) {
            if (maxValue < arrayNew[i]) {
                maxValue = arrayNew[i]
            }
        }
        return maxValue
    }
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0
    }
    if (array.length > 1) {
        let arrayOfValue = array
        let avg = 0
        let sum = 0
        let lengtharrayOfValue = arrayOfValue.length
        for (let i = 0; i < lengtharrayOfValue; i++) {
            sum += arrayOfValue[i]
        }
        avg = sum / lengtharrayOfValue
        return avg
    }
}