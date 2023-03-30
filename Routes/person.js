const express=require('express')
const controller=require('../controllers/person')
const router=express.Router()

router.post('/person',controller.persondata)
router.get('/personfind',controller.findperson)
router.get('/personsalary',controller.findpersonsalary)
router.get('/personexp',controller.findpersonsalaryandExp)
router.get('/persongrad',controller.findpersongrad)
router.put('/personupdate',controller.findpersonupdate)
router.delete('/persondel',controller.findpersondelete)
module.exports=router