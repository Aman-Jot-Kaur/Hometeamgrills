import React, { useState,useEffect } from 'react';
import "./Vendor.css"
import axios from 'axios';

const VendorProductPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(1);
    const [discounted, setDiscounted] = useState(1);
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };



    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };
 



    const handlePriceChange = (e) => {
        setPrice(e.target.value*1);
    };

    const handleDiscountedChange = (e) => {
        setDiscounted(e.target.value*1);
    };


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
    useEffect(() => {
        const email=localStorage.getItem("mail")
        axios
        .get(`http://localhost:3001/getproducts?q=${email}`).then((res)=>{
        console.log(res.data)
             setProducts(res.data)
        }).catch(error => {
            console.log( error)
          })
      }, []);

      useEffect(() => {
     const email=localStorage.getItem("mail")
   
        axios
        .get(`http://localhost:3001/getproducts?q=${email}`).then((res)=>{
        
             setProducts(res.data)
        }).catch(error => {
            console.log( error)
          })
      }, [cart]);
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };
    const handlesubmit=(e)=>{
        e.preventDefault();
        const vendor=localStorage.getItem("mail");
        axios.post("http://localhost:3001/addproduct",{title,description,category,price,discounted,approved:false,vendor}).then(()=>{
            console.log("added product")
            setTitle('')
            setDescription('')
            setDiscounted()
            setCategory('')
            setPrice()
            toggleCart();
            setCart([]);
            alert("product added")
        }
          
           
   ) .catch(
    (error)=>{console.log(error)}
   )
    }
  


const additemtoproducts=(product)=>{
    console.log(product)
axios.post("http://localhost:3001/sendforapproval",product).then(
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
                    <div className="shopping-cart">
                        {/* Shopping cart */}
                        <button className="navbutton" onClick={toggleCart}>Add new product</button>
                        {/* Cart content */}
                        {cartOpen && (
                            <div className="cart-content" id="addproductform">
                                <form onSubmit={handlesubmit}>
                                <input onChange={handleTitleChange} type="text" name="title" required placeholder="product title"></input>
                                    <input onChange={handleDescriptionChange} type="text" name="description" placeholder="product description"></input>
                                    <input onChange={handleCategoryChange} type="text" name="category" placeholder="product category"></input>
                                    
                                    <input style={{width:"255px",height:"40px"}} className="numinput" onChange={handlePriceChange}  type="number" required name="price" placeholder="product price"></input>
                                    <input style={{width:"255px",height:"40px"}} className="numinput" onChange={handleDiscountedChange} type="number" name="discounted" placeholder="discounted price"></input>
                                    <input type="submit"></input>
                                </form>
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
                        <h4>{product.title}</h4>
                        <p>In {product.category}</p>
                        <p>${product.price}</p>
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt={product.name} />
                     {(product.approved== false)?
                        <button className='addtocart' onClick={()=>additemtoproducts(product)}>Send for approval</button>:
                        <button className='addtocart' style={{backgroundColor:"green"}}>approved</button> 
                     }
                    </div>
                ))}
            </div>
            

            
        </div>
    );
};

export default VendorProductPage