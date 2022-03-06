import express from 'express'
import 'dotenv/config'
import { data } from './models/index.js'
import { router } from './controller/index.js'
const app = express()

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
app.set('port', DEFAULT_PORT)

app.get('/', (req, res) => {
  res.send(data)
})

app.use('/post', router)

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'))
})
