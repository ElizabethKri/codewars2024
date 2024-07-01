function sumDigits(number) {
    let sum = 0
    let  newArr = Math.abs(number).toString().split('')
    console.log(newArr)

    newArr.forEach(el => {
        sum += parseInt(el)
    })
    return sum
}

console.log(sumDigits(5231))


function sumMix(x){
    let sum = 0
    let arr =  x.toString().split(',')
    console.log(arr)
    arr.forEach(el => {
        sum +=parseInt(el)
    })
    return sum
}

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))



function grow(x){
    let operation = 1
    x.forEach((el) => {
        operation *= el
    })
    return operation
}

console.log(grow([1, 2, 3]))