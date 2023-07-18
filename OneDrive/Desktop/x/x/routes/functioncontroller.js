const mongoose = require("mongoose")
const UserModel = require("../models/user")
const ProductModel=require("../models/products")
const AdminModel=require("../models/approvalproducts")
const CustomerModel=require("../models/customerproduct")
exports.sendforapproval=(req,res)=>{

  const userobj = new AdminModel(req.body);
console.log(":",req.body)
  userobj.save()
      .then(result => {
          console.log("new request product data")
          console.log(result)

      })
      .catch(err => {
          console.log(err);
      });
} 

exports.loginfunction=async(req,res)=>{
    let email =req.body.email;
    let password = req.body.password;
      
   
    const user = await UserModel.findOne({email: req.body.email,password: req.body.password});
    const num=await UserModel.findOne({number: req.body.number,password: req.body.password});
   
     if(user){
       res.send(user)
     }
    else if(num ){
        res.send(num)
     }
}

exports.loginfunctionwithgoogle=async(req,res)=>{
    let email =req.body.email;
    let password = req.body.password;
      
   
    const user = await UserModel.findOne({email: req.body.email});
   
     if(user ){
       res.send(user)
     }
     else{
        res.send(null)
     }
}
exports.signup = (req, res) => {




    let email = req.body.email;
    let password = req.body.password;
let role=req.body.role;
 let number=req.body.phoneNumber;
    let body = {
        email,
        password,
        number
    }

    const userobj = new UserModel(req.body);

    userobj.save()
        .then(result => {
            // console.log("new user data")
            // console.log(result)

        })
        .catch(err => {
            console.log(err);
        });
        res.send();

}
exports.getavailableproducts=(req,res)=>{
  const person=CustomerModel.find().then(function (models) {
     
    res.send(models)
    })
    .catch(function (err) {
      console.log(err);
    });
}
exports.gettingallproducts=(req,res)=>{
    const userobj = new ProductModel();
 const mail=req.query.q;

    const person=ProductModel.find({$or: [
      {vendor: mail},
      {vendor: mail}]}).then(function (models) {
       
      res.send(models)
      })
      .catch(function (err) {
        console.log(err);
      });

}
exports.approveproduct=(req,res)=>{
  const userobj = new CustomerModel(req.body);
  userobj.save()
  .then(result => {
      // console.log("new user data")
      // console.log(result)

  })
  .catch(err => {
      console.log(err);
  });
  ProductModel.findByIdAndUpdate(req.body._id,{ approved:true }).then(
    console.log("product approved and updated")
  )
  const person=AdminModel.findOneAndDelete(req.body).then(function (models) {
     
   
    })
    .catch(function (err) {
      console.log(err);
    });
  res.send();
}
exports.getapproval=(req,res)=>{
  

  const person=AdminModel.find().then(function (models) {
     
    res.send(models)
    })
    .catch(function (err) {
      console.log(err);
    });

}
exports.addingproduct=(req,res)=>{
    let title = req.body.title;
    let description = req.body.description;
    let category = req.body.category;
    let price = req.body.price;
    let discounted = req.body.discounted;
    let body = {
        title,description,category,price,discounted
    }

    const userobj = new ProductModel(req.body);

    userobj.save()
        .then(result => {
            console.log("new product data")
            console.log(result)

        })
        .catch(err => {
            console.log(err);
        });
        res.send();
}
exports.addingtocart=(req,res)=>{
    const userobj = new UserModel();
    const prod=req.body.cart;
    console.log(prod)
    const person=UserModel.updateOne({email: "an@gmail.com"},{cart:prod}).then(function (models) {
       
        // console.log(models)
      })
      .catch(function (err) {
        console.log(err);
      });

  
  
//   person.rating = [...person.cart,{ prod}]
// person.save();
   
}

exports.gettingcart=(req,res)=>{
    const userobj = new UserModel();
    const mail=req.query.q;
    console.log(mail)
    const person=UserModel.findOne({email:mail}).then(function (models) {
    //    console.log(models)
    res.send(models)
      })
      .catch(function (err) {
        console.log(err);
      });

  

   
}
