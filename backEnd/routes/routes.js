const express = require('express')
const router = express.Router()
const Question = require('../models/Question') // includes our model


router.get('/', (req, res) => {
  res.send('H3ll0 W0RlD')
})


module.exports = router