import React, { useState,useEffect } from 'react';
import "./adminpage.css"
import axios from 'axios';
const PendingPage = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [products, setProducts] = useState([
    ]);
    const [cart, setCart] = useState([
        { id: 1, name: 'Product 1', price: 9.99, category:"technology" },
    
    ]);
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };
    
    useEffect(() => {
      
        const email="an@gmail.com";
        axios
        .get(`http://localhost:3001/getapproval`).then((res)=>{
            console.log("Vin")
             setProducts(res.data)
             console.log(res.data)
        }).catch(error => {
            console.log( error)
          })
      }, []);
      useEffect(() => {
      
        const email="an@gmail.com";
        axios
        .get(`http://localhost:3001/getapproval`).then((res)=>{
            console.log("Vin")
             setProducts(res.data)
             console.log(res.data)
        }).catch(error => {
            console.log( error)
          })
      }, [products]);


      const additemtoproducts=(product)=>{
        console.log(product)
        var index = products.indexOf(product)
        setProducts([
            ...products.slice(0, index),
            ...products.slice(index + 1)
          ]);
    axios.post("http://localhost:3001/approveproduct",product).then(
        alert("sent product for approval request")
        
    ) .catch(
        (error)=>{console.log(error)}
       )
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
                   
                </div>
            </nav>

            {/* Products */}
            <div className="product-list">
                {/* Display products in divs */}
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <h4>{product.title}</h4>
                        <p>In {product.category}</p>
                        <p>${product.price}</p>
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt={product.name} />
                        <button className='addtocart' onClick={()=>additemtoproducts(product)}>Add to products</button>
                    </div>
                ))}
            </div>
            

            
        </div>
    );
};

export default PendingPage