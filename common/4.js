const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4]
const isEven = num => num % 2 === 0

const filterArray = (arr, func) => arr.filter(item => func(item)).join(',')

console.log(filterArray(mixedArray, isEven))