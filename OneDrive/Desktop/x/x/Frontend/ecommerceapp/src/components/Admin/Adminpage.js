import React, { useState,useEffect } from 'react';
import "./adminpage.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AdminPage = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 9.99, category:"technology" },
        { id: 2, name: 'Product 2', price: 19.99 , category:"technology"},
        { id: 3, name: 'Product 3', price: 29.99 ,category:"art"},
        { id: 4, name: 'Product 4', price: 29.99 , category:"art"}
    ]);
    const navigate=useNavigate();
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
          console.log(temporary)
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
                    <div className="avatar">
                        {/* Avatar picture */}
                        <img src="https://images.unsplash.com/photo-1636622433525-127afdf3662d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="Avatar" />
                    </div>
                    <div className="search-input">
                        {/* Search input */}
                        <input type="text" placeholder="Search" />
                    </div>
                    <button onClick={()=>{navigate("/pending")}} className='pendingbutton'>show pending approvals</button>
                    <div className="shopping-cart">
                        {/* Shopping cart */}
                        <button onClick={toggleCart}>Cart</button>
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

export default AdminPage;
