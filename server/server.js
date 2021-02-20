import express from 'express'
import cors from 'cors'
import test from './Routes/testCode.js'
import path from 'path'

const __dirname = path.resolve()

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8000
app.use('/api', test)

if (process.env.NODE_ENV === 'production') {
  app.use('/static', express.static(path.join(__dirname, '/front/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/front/build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log('Server app listening on port ' + port)
})
