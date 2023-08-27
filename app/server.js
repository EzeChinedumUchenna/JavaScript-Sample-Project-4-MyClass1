const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello My Love!')
})

app.listen(port, () => {
  console.log(`My app is listening on port ${port}`)
})
