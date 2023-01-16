const express = require('express')
const UAParser = require('ua-parser-js')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const parser = new UAParser(req.headers["user-agent"])
    res.json(parser.getResult())
})

app.get('/headers', (req, res) => {
    res.json(req.headers)
})

app.listen(port, () => {
    return console.log(`Example app listening on port ${port}!`)
})
