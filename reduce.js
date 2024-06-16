Array = [1,2,3]
function squareSum(numbers){
    numbers = Array.reduce( function (acc, currentValue){
        return acc + currentValue * 2
    })
    console.log(numbers)
}

console.log(squareSum(Array))