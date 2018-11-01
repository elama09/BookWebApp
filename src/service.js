
export const getBooksFromApi = (callback) => {
    // Here the url of Data
    fetch('https://api.myjson.com/bins/gnfia')
        .then(res => res.json())
        .then(data => {
            callback(data)
        })
}