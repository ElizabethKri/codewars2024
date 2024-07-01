function smash (words) {
    return words.join(' ')
}

console.log(smash(['hello', 'world', 'this', 'is', 'great']))

function descendingOrder(n){

    return n.split('').sort((a, b) => b- a).join('')
}

console.log(descendingOrder("42145"))


