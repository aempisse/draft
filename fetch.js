const fetch = require('node-fetch')

async function fetchTopFive(sub) {
    const URL = `https://www.reddit.com/r/${sub}/top/.json?limit=5`
    const fetchResult = fetch(URL)
    const response = await fetchResult
    if (response.ok) {
        const jsonData = await response.json()
        jsonData.data.children
            .map(x => x.data.title)
            .map(title => console.log(title))
    } else {
        throw(Error(response.statusText))
    }
}

let [,, sub] = process.argv
sub = sub || 'javascript'

fetchTopFive(sub)