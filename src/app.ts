import express from 'express'

const app = express()

app.get('/api/hello', (req, res) => {
  res.send('Hello World!')
})

export default app