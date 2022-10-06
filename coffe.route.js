const {Router} = require('express')
const router = Router()
const {coffeController} = require('./coffe.controller')

router.post('/coffe', coffeController.getofdrinks)
router.get('/coffe', coffeController.findDrinks)
router.get('/coffe/:id',coffeController.findIdDrinks)
router.delete('/coffe/:id', coffeController.deleteDrinks)
router.patch('/coffe/:id', coffeController.updateDrinks)

module.exports = router