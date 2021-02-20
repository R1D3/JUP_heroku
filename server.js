import express from 'express'
import cors from 'cors'
import test from './Routes/testCode.js'

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Javascript Under Pressure Test')
})

app.use('/api', test)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../front/build'))
}
app.listen(port, () => {
  console.log('Server app listening on port ' + port)
})
