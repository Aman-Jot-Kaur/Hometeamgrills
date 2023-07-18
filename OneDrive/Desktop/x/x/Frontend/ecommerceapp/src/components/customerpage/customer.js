import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./customer.css"
import axios from 'axios';
const CustomerPage = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 9.99, category: "technology" },
        { id: 2, name: 'Product 2', price: 19.99, category: "technology" },
        { id: 3, name: 'Product 3', price: 29.99, category: "art" },
        { id: 4, name: 'Product 4', price: 29.99, category: "art" }
    ]);
    const [cart, setCart] = useState([

    ]);
    const navigate = useNavigate();
    const toggleCart = () => {
        setCartOpen(!cartOpen);
    };
    const productclick = (product) => {
        localStorage.setItem("product", JSON.stringify(product));
        console.log(product)
        navigate("/productdetail")
    }
    useEffect(() => {
        console.log("Vin")
        const email = "an@gmail.com";
        axios
            .get(`http://localhost:3001/getcart?q=${email}`).then((res) => {
                console.log("Vin")
                setCart[res.data.cart]
            }).catch(error => {
                console.log(error)
            })
    }, []);
    useEffect(() => {
        axios
            .get(`http://localhost:3001/getavailableproducts`).then((res) => {
                console.log("Vin2")
                setProducts(res.data)
            }).catch(error => {
                console.log(error)
            })
    }, [])


    const additemtocart = (product) => {

        let temporary = [...cart, product];
        console.log(temporary)
        const email = "an@gmail.com";

        axios.post("http://localhost:3001/cart", { cart: temporary, email }).then(
            alert("cart updated")
        ).catch(error => {
            console.log(error)
        })
        setCart([...cart, product]);

    }
    //getavailableproducts

    return (
        <div className='maindiv'>
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-menu">
                    <img style={{ width: "200px", height: "150px", marginTop: "-20px" }} src="https://th.bing.com/th/id/OIP.9V_BtTHUgL3hGdNwLUbhgwHaFr?pid=ImgDet&w=235&h=180&rs=1" />

                    <div className="search-input">
                        {/* Search input */}
                        <input style={{ textAlign: "center", fontSize: "20px", outline: "none" }} className="search-input-in" type="text" placeholder="Search" />
                    </div>




                    <button onClick={() => { navigate("/myproducts") }} className='myproducts'>Orders</button>
                    <div className="shopping-cart" style={{ display: "flex", gap: "10px" }}>
                        {/* Shopping cart */}

                        <div className="avatar">
                            {/* Avatar picture */}

                            <img style={{ marginTop: "-2%" }} src="https://avatarfiles.alphacoders.com/212/212890.jpg" alt="Avatar" />
                        </div>
                        <img style={{ height: "60px" }} src="https://cdn3.iconfinder.com/data/icons/business-and-office-paper-vol-2/150/cart__shopping__baby__ecommerce-512.png"
                            onClick={toggleCart}></img>

                        {/* Cart content */}
                        {cartOpen && (
                            <div className="cart-content">
                                <button style={{ backgroundColor: "red", width: "30px", marginRight: "10%" }} onClick={toggleCart}>x</button>
                                <ul>
                                    {/* List of products in the cart */}
                                    {cart.map((product) => (
                                        <li key={product.id}>
                                            <div style={{ display: "flex", gap: "20px" }}>
                                                <p>{product.title}</p>
                                                <p> ${product.price}</p>
                                                <img style={{ backgroundColor: "#fff", marginBottom: "10px", right: "60px", height: "30px", width: "30px" }} className='addtocart' src="https://th.bing.com/th/id/OIP.Q9t4awyuirh3UwXfTFzGSgHaHa?pid=ImgDet&rs=1"></img>
                                                <button style={{ backgroundColor: "#d3d3d3", marginBottom: "10px", right: "60px", height: "40px", width: "70px" }} className='addtocart'>Buy</button>
                                            </div>



                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <div className="displayimage" style={{ display: "flex", gap: "60px", textAlign: "center" }}>
                <img style={{ width: "100vw" }} src="https://i.pinimg.com/originals/6f/39/35/6f393516f4f2876c5ff1b8ddcf57c638.jpg"></img>


            </div>
            <div style={{ display: "flex", gap: "60px", marginTop: "20px" }}>
                <div className="category" style={{
                    width: "400px", height: "300px", boxShadow: '0 40px 80px #FBE4E0',
                    borderRadius: '14px'
                }}>
                    <p>Arts</p>
                    <img style={{ width: "150px", height: "200px" }} src="https://th.bing.com/th/id/OIP.rRGeXimNK5RfUuOSPq9DsQHaH1?pid=ImgDet&rs=1"></img>
                </div>
                <div className="category" style={{
                    width: "400px", height: "300px", boxShadow: '0 40px 80px #FBE4E0',
                    borderRadius: '14px'
                }}>
                    <p>Fashion</p>
                    <img style={{ width: "150px", height: "200px" }} src="https://i.pinimg.com/originals/ec/f1/e1/ecf1e1f80c28b4cce023e6b55bc0f0b1.jpg"></img>
                </div>
                <div className="category" style={{
                    width: "400px", height: "300px", boxShadow: '0 40px 80px #FBE4E0',
                    borderRadius: '14px'
                }}>
                    <p>Tech</p>
                    <img style={{ width: "150px", height: "200px" }} src="https://th.bing.com/th/id/OIP.hxKWlnED8Suu3exNpJuTJgHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7"></img>
                </div></div>
            {/* Products */}
            <div className="product-list" >
                {/* Display products in divs */}
                {products.map((product) => (
                    <div key={product.id} className="product" >
                        <h4>{product.name}</h4>
                        <p>In {product.category}</p>
                        <p>${product.price}</p>
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt={product.name} />
                        <button style={{ backgroundColor: "#89B9FB" }} onClick={() => { productclick(product) }}>view details</button>
                        <button className='addtocart' onClick={() => additemtocart(product)}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CustomerPage;
