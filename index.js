require('dotenv').config()
const express = require('express')

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/google',(req, res) => {
  res.send('Google')
})

app.get('/login', (req, res) => {
  res.send('<h1>Welcome to the Login Page</h1>')
})

app.get('/jobtkk', (req, res) =>{
  res.send('<h1>Welcome to the Takako Company pages...!</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})