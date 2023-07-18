import React, { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Product 1',
            price: 10.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        },
        {
            id: 2,
            name: 'Product 2',
            price: 15.99,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
        },
        // Add more products as needed
    ]);
    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [tax] = useState(0.08);

    const handleQuantityChange = (id, quantity) => {
        const updatedProducts = products.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: Math.max(quantity, 0) };
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const handleRemoveItem = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    };

    const handleCouponChange = (event) => {
        setCoupon(event.target.value);
    };

    const handleApplyCoupon = () => {
        if (coupon === 'DISCOUNT20') {
            setDiscount(0.2 * calculateSubtotal());
            alert("yay you received a discount!")
        } else {
            setDiscount(0);
        }
    };

    const calculateSubtotal = () => {
        return products.reduce(
            (subtotal, product) => subtotal + product.price * product.quantity,
            0
        );
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const total = subtotal - discount + subtotal * tax;
        return total.toFixed(2);
    };

    const handleBuyNow = () => {

        alert('Buy Now clicked!');
    };

    return (
        <div className="cart-page">
            <div className="product-list-container">
                <h1>Your Cart</h1>
                <div className="products-list">
                    {products.map((product) => (
                        <div className="product-item" key={product.id}>
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>Price: ${product.price.toFixed(2)}</p>
                                <div className="quantity-input">
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(product.id, product.quantity - 1)
                                        }
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="0"
                                        value={product.quantity}
                                        onChange={(event) =>
                                            handleQuantityChange(
                                                product.id,
                                                event.target.valueAsNumber
                                            )
                                        }
                                    />
                                    <button
                                        onClick={() =>
                                            handleQuantityChange(product.id, product.quantity + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="remove-item-button"
                                    onClick={() => handleRemoveItem(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                            <div className="product-subtotal">
                                <p>Subtotal: ${(product.price * product.quantity).toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bill-container">
                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-section">
                        <div className="summary-item">
                            <span>Subtotal:</span>
                            <span>${calculateSubtotal().toFixed(2)}</span>
                        </div>
                        <div className="summary-item">
                            <span>Discount:</span>
                            <span>-${discount.toFixed(2)}</span>
                        </div>
                        <div className="summary-item">
                            <span>Tax ({(tax * 100).toFixed(2)}%):</span>
                            <span>${(calculateSubtotal() * tax).toFixed(2)}</span>
                        </div>
                        <div className="summary-item total">
                            <span>Total:</span>
                            <span>${calculateTotal()}</span>
                        </div>
                    </div>
                    <div className="coupon-section">
                        <input
                            type="text"
                            value={coupon}
                            onChange={handleCouponChange}
                            placeholder="Enter coupon code"
                        />
                        <button onClick={handleApplyCoupon}>Apply Coupon</button>
                    </div>
                    <div className="payment-section">
                        <h3>Payment Methods</h3>
                        <div className="payment-options">
                            <input type="radio" id="credit-card" name="payment-method" />
                            <label htmlFor="credit-card">Credit Card</label>

                            <input type="radio" id="paypal" name="payment-method" />
                            <label htmlFor="paypal">PayPal</label>

                            <input type="radio" id="google-pay" name="payment-method" />
                            <label htmlFor="google-pay">Google Pay</label>

                            {/* Add more payment options as needed */}
                        </div>
                        <button onClick={handleBuyNow} className="buy-now-button">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
