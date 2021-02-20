import express from 'express'
import cors from 'cors'
import test from './Routes/testCode.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8000
app.use('/api', test)

if (process.env.NODE_ENV === 'production') {
  app.use('/static', express.static(path.join(__dirname, 'front/build')))
}
app.listen(port, () => {
  console.log('Server app listening on port ' + port)
})
