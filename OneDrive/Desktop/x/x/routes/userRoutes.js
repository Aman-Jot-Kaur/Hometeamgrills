const express = require("express")
const router = express.Router();
const appcontroller = require("./functioncontroller");

router.post('/usersignup', appcontroller.signup)
router.post('/userlogin', appcontroller.loginfunction)
router.post('/userloginwithgoogle', appcontroller.loginfunctionwithgoogle)
router.get('/getavailableproducts', appcontroller.getavailableproducts)//getting all products exclusive to sell to cuss
router.post('/cart', appcontroller.addingtocart)//add to cart
router.post('/sendforapproval', appcontroller.sendforapproval)//when vendor sends a product approval request
router.post('/approveproduct', appcontroller.approveproduct)//action after admin allows the product
router.get('/getapproval', appcontroller.getapproval)//to get approval list pending for admin
router.get('/getproducts',appcontroller.gettingallproducts)//getting vendor products 
router.get('/getcart', appcontroller.gettingcart)//get cart item for specific user
router.post('/addproduct',appcontroller.addingproduct)
module.exports = router;