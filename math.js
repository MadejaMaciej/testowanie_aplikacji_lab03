/**
 * Sums a and b.
 * @param {number} a 
 * @param {number} b 
 * @returns Not a number if parameter is not a number, sum value on success.
 */
const sum = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Not a number"
    }

    return a + b
}

/**
 * Removes numbers from eachother.
 * @param {number} a 
 * @param {number} b 
 * @returns Not a number if parameter is not a number, removing value on success.
 */
const remove = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Not a number"
    }

    return a - b
}

/**
 * Removes smaller number from bigger.
 * @param {number} a 
 * @param {number} b 
 * @returns Not a number if parameter is not a number, removing (from bigger) value on success.
 */
const removeSmaller = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Not a number"
    }

    if (a > b) return a - b
    else return b - a
}

/**
 * Divides an number a by number b.
 * @param {number} a 
 * @param {number} b 
 * @returns Not a number if parameter is not a number, dividing value on success.
 */
const divide = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Not a number"
    }

    if (b === 0) {
        return "Cannot divide by 0"
    }

    return a / b
}

/**
 * Substracts numbers provided.
 * @param {number} a 
 * @param {number} b 
 * @returns Not a number if parameter is not a number, or multiply value of both parameters.
 */
const multiply = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Not a number"
    }

    return a * b
}

/**
 * Checks if passed parameter is a number.
 * @param {number} a 
 * @returns false if parameter is not a number or is odd value, true otherwise
 */
const isEven = (a) => {
    if (isNaN(a)) {
        return false
    }

    return a % 2 === 0
}

/**
 * Sorts array by bubble sort method.
 * @param {array} inputArr 
 * @returns empty array if bad parameter was provided, sorted array on success
 */
const bubbleSort = (inputArr) => {
    if (!Array.isArray(inputArr)) {
        return []
    }

    let len = inputArr.length
    let checked
    do {
        checked = false
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i]
                inputArr[i] = inputArr[i + 1]
                inputArr[i + 1] = tmp
                checked = true
            }
        }
    } while (checked)
    return inputArr
}

/**
 * Adds all array elements.
 * @param {array} arr maximum 5 elements, minimum 2
 * @returns sum of all elements on success, -1 if array was larger than 5 elements, or lesser than 2 elements or if parameter is not an array.
 */
const sumOfArrayElements = (arr) => {
    if (!Array.isArray(arr)) {
        return -1
    }

    if (arr.length > 5 || arr.length < 2) {
        return -1
    }

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }

    return sum
}

module.exports = {
    sum,
    remove,
    removeSmaller,
    divide,
    multiply,
    isEven,
    bubbleSort,
    sumOfArrayElements
}