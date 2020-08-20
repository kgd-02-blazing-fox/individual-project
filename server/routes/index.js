const express = require('express')
const router = express.Router()

const Controller = require('../controllers/controller')

router.get('/', Controller.fetchItem)
router.put('/:itemId', Controller.editItem)

module.exports = router