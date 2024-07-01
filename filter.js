Arr = [["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]]

function searchNames(logins) {
    return logins.filter((login) => {
        return login[0].slice(-1) === '_'
    })
}

console.log(searchNames(Arr))
