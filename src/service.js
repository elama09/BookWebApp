
export const getBooksFromApi = (callback) => {
    // Here the url of Data
    fetch('https://www.dropbox.com/s/ga62lcm9sq8tyet/data.json?dl=0')
        .then(res => res.json())
        .then(data => {
            console.log(`In fetch service ${data}`);
            callback(data)
        })
}