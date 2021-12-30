import express from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, './client')))

app.get('', (req,res) => {
  res.render('/index')
})

app.get('/home', (req, res) => {
  res.render('../client/src/Pages/Home.js')
})

app.get('/events', (req,res) => {
  res.render()
})