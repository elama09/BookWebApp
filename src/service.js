
export const getBooksFromApi = (callback) => {
    // Here the url of Data
    fetch('http://www.elisanet.fi/romantestaus/data.json')
        .then(res => res.json())
        .then(data => {
            console.log(`In fetch service`);
            console.log(data)
            callback(data)
        })
}