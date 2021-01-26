const express = require('express')
const app = express()

app.get('/en', (req, res) => {
  res.json({ title: 'Title in eng' })
})

app.get('/ru', (req, res) => {
  res.json({ title: 'Title in rus' })
})

app.get('/et', (req, res) => {
  res.json({ title: 'Title in est' })
})

module.exports = {
  path: '/api',
  handler: app,
}
