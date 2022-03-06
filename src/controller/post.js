import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Post')
})

router.get('/1', (req, res) => {
  res.send('Post 1')
})
export { router }
