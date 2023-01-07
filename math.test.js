const math = require('./math')

describe('sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(math.sum(1, 2)).toBe(3)
    })

    test('adds strings', () => {
        expect(math.sum("test", "test")).toBe("Not a number")
    })
})

describe('remove function', () => {
    test('removes 1 - 2 to equal -1', () => {
        expect(math.remove(1, 2)).toBe(-1)
    })

    test('removes strings', () => {
        expect(math.remove("test", 2)).toBe("Not a number")
    })
})

describe('removeSmaller function', () => {
    test('removes 2 - 1 to equal 1', () => {
        expect(math.removeSmaller(1, 2)).toBe(1)
    })

    test('removes -2 - 2 to equal 4', () => {
        expect(math.removeSmaller(-2, 2)).toBe(4)
    })

    test('removes strings', () => {
        expect(math.removeSmaller("test", 2)).toBe("Not a number")
    })
})

describe('divide function', () => {
    test('Dividies 10 / 5 to equal 2', () => {
        expect(math.divide(10, 5)).toBe(2)
    })

    test('Dividies by 0', () => {
        expect(math.divide(10, 0)).toBe("Cannot divide by 0")
    })

    test('Dividies strings', () => {
        expect(math.removeSmaller("test", 2)).toBe("Not a number")
    })
})

describe('multiply function', () => {
    test('multiplies 1 * 20 to equal 20', () => {
        expect(math.multiply(1, 20)).toBe(20)
    })

    test('multiplies string', () => {
        expect(math.multiply("test", 2)).toBe("Not a number")
    })
})

describe('isEven function', () => {
    test('Checks if 2 is even', () => {
        expect(math.isEven(2)).toBe(true)
    })

    test('Checks if 3 is even', () => {
        expect(math.isEven(3)).toBe(false)
    })

    test('Checks if string is even', () => {
        expect(math.isEven([1, 2, 3])).toBe(false)
    })
})

describe('bubbleSort function', () => {
    test('Checks sorted array', () => {
        expect(math.bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    test('Checks mixed array', () => {
        expect(math.bubbleSort([1, 3, 4, 4, 2])).toEqual([1, 2, 3, 4, 4])
    })

    test('Checks reversed array', () => {
        expect(math.bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    })

    test('Checks not array', () => {
        expect(math.bubbleSort(1)).toEqual([])
    })
})

describe('sumOfArrayElements function', () => {
    test('Checks small array', () => {
        expect(math.sumOfArrayElements([1])).toBe(-1)
    })

    test('Checks not array', () => {
        expect(math.sumOfArrayElements(1)).toBe(-1)
    })

    test('Checks big array', () => {
        expect(math.sumOfArrayElements([1, 1, 2, 2, 3, 3])).toBe(-1)
    })

    test('Check array', () => {
        expect(math.sumOfArrayElements([1, 1, 2, 2, 3])).toEqual(9)
    })

    test('Check string array', () => {
        expect(math.sumOfArrayElements(["1", "2", "3", "4", "5"])).toEqual("012345")
    })
})