const connect = require('connect')
const url = require('url')

const app = connect()


app.use('/lab2', (req, res) => {
    const query = url.parse(req.url, true).query
    const method = query.method
    const x = parseFloat(query.x)
    const y = parseFloat(query.y)
    let result, error = null

    switch (method) {
        case 'add':
            result = x + y
            break
        case 'subtract':
            result = x - y
            break
        case 'multiply':
            result = x * y
            break
        case 'divide':
            result = x / y
            break
        default:
            error = 'Invalid method'
    }

    if (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ error }))
  } else {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ x, y, method, result }))
  }
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
