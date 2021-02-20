import express from 'express'
import cors from 'cors'
import test from './Routes/testCode.js'
import path, { dirname } from 'path'

const __dirname = path.resolve()

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8000
app.use('/api', test)

  console.log(__dirname)
  app.use(express.static(path.join(__dirname, '/front/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'/front/build', 'index.html'))
  })

app.listen(port, () => {
  console.log('Server app listening on port ' + port)
})
