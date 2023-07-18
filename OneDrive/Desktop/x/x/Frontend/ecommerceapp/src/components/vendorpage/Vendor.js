import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Vendor.css"
import axios from 'axios';
const VendorPage = () => {
    const navigate=useNavigate();
    const [cartOpen, setCartOpen] = useState(false);
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 9.99, category:"technology" },
        { id: 2, name: 'Product 2', price: 19.99 , category:"technology"},
        { id: 3, name: 'Product 3', price: 29.99 ,category:"art"},
        { id: 4, name: 'Product 4', price: 29.99 , category:"art"}
    ]);
    const [cart, setCart] = useState([
        { id: 1, name: 'Product 1', price: 9.99, category:"technology" },
    
    ]);
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };
    
    useEffect(() => {
        console.log("Vin")
        const email="an@gmail.com";
        axios
        .get(`http://localhost:3001/getcart?q=${email}`).then((res)=>{
            console.log("Vin")
             setCart[res.data.cart]
        }).catch(error => {
            console.log( error)
          })
      }, []);



    const additemtocart=(product)=>{
       
          let temporary=[...cart,product];
         
          const email="an@gmail.com";
          
            axios.post("http://localhost:3001/cart",{cart:temporary,email}).then(
           alert("cart updated")
   ).catch(error => {
    console.log( error)
  })
  setCart([...cart,product]);

    } 
 
    return (
        <div className='maindiv'>
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-menu">
                <img  style={{width:"200px",height:"150px",marginTop:"-20px"}} src="https://th.bing.com/th/id/OIP.9V_BtTHUgL3hGdNwLUbhgwHaFr?pid=ImgDet&w=235&h=180&rs=1"/>
                   
                    <div className="search-input">
                        {/* Search input */}
                        <input className="search-input-in" type="text" placeholder="Search" />
                    </div>
                   
                    
                    
                    
                    <button onClick={()=>{navigate("/myproducts")}} className='myproducts'>My products</button>
                    <button onClick={()=>{navigate("/myproducts")}} className='myproducts'>Orders</button>
                    <div className="shopping-cart" style={{display:"flex",gap:"10px"}}>
                        {/* Shopping cart */}
                        
                        <div className="avatar">
                        {/* Avatar picture */}
                       
                        <img style={{marginTop:"-2%"}} src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="Avatar" />
                    </div>
                        <img style={{height:"60px"}} src="https://th.bing.com/th/id/R.24989cbbc5c9e79573866b0cb1097a3f?rik=rgOsX4Oeg07XZA&riu=http%3a%2f%2fwww.northtexas-webdesign.com%2fwp-content%2fuploads%2f2013%2f04%2fecommerce-shopping-cart.jpg&ehk=gkylfdX5VE7k82iYNxX%2fAsMHY5A%2fzx8F5kODmhZGGRg%3d&risl=&pid=ImgRaw&r=0"
                        onClick={toggleCart}></img>
                        
                        {/* Cart content */}
                        {cartOpen && (
                            <div className="cart-content">
                                <ul>
                                    {/* List of products in the cart */}
                                    {cart.map((product) => (
                                        <li key={product.id}>
                                            {product.name} - ${product.price}
                                            <button>Buy</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            
<div className="displayimage" style={{display:"flex",gap:"60px",textAlign:"center"}}>
    <img style={{width:"100vw"}} src="https://i.pinimg.com/originals/6f/39/35/6f393516f4f2876c5ff1b8ddcf57c638.jpg"></img>
    
    
</div>
<div style={{display:"flex",gap:"60px",marginTop:"20px"}}>
<div className="category" style={{width:"200px",height:"100px", boxShadow: '0 40px 80px #FBE4E0',
  borderRadius: '14px'}}>
       <p>Arts</p>
    </div>
    <div className="category" style={{width:"200px",height:"100px", boxShadow: '0 40px 80px #FBE4E0',
  borderRadius: '14px'}}>
       <p>Fashion</p>
    </div>
    <div className="category" style={{width:"200px",height:"100px", boxShadow: '0 40px 80px #FBE4E0',
  borderRadius: '14px'}}>
       <p>Tech</p>
    </div></div>
            {/* Products */}
            <div className="product-list">
                {/* Display products in divs */}
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <h4>{product.name}</h4>
                        <p>In {product.category}</p>
                        <p>${product.price}</p>
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt={product.name} />
                        <button className='addtocart' onClick={()=>additemtocart(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
       
    );
};

export default VendorPage;
