const request = require('superagent')
const cheerio = require('cheerio')

async function getUrl(url) {
    const res = await request.get(url)
    const $ = cheerio.load(res.text)
    console.log($)
}

getUrl("https://stock.tuchong.com/topic?topicId=49454");