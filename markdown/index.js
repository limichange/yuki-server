const request = require('request')

request.post({
  method: 'POST',
  uri: 'https://api.github.com/markdown/raw',
  headers: {
    'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36",
    'Content-Type': 'text/plain'
  },
  body: `# h1`
}, (error, response, body) => {
  console.log(body)
})
