const path = require('path');

const express = require('express');

const rootDir=require('../path.js')

const productController=require('../controllers/product');
const contactController=require('../controllers/contact.js')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);

router.get("/contactus",contactController.contactform)

router.post("/sucess",contactController.sucess)
module.exports = router;
