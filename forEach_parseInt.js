function sumDigits(number) {
    let sum = 0
    let  newArr = Math.abs(number).toString().split('')

    newArr.forEach(el => {
        sum += parseInt(el)
    })
    return sum
}

console.log(sumDigits(5231))