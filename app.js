const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Jesse Alvarez')
})

app.get('/stretch', (req, res) => {
  res.status(200).send('This is for a stretch goal!!')
})

app.get('*', (req, res) => {
  res.status(404).send('This is an error message')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})# Expressintro
