import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json({ limit: '1byte', type: 'application/json' }))
