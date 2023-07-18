import React from 'react';
import './Orderspage.css';

const OrdersPage = () => {
    // Sample data for demonstration
    const orders = [
        {
            id: 1,
            customer: 'John Doe',
            contact: 'john.doe@example.com',
            date: 'July 15, 2023',
            deliveryDate: 'July 18, 2023',
            status: 'In Progress',
            price: 25.99,
            quantity: 2,
        },
        {
            id: 2,
            customer: 'Jane Smith',
            contact: 'jane.smith@example.com',
            date: 'July 14, 2023',
            deliveryDate: 'July 17, 2023',
            status: 'Delivered',
            price: 15.99,
            quantity: 1,
        },
        // Add more sample orders as needed
    ];

    // Calculate total earnings
    const totalEarnings = orders.reduce(
        (total, order) => total + order.price * order.quantity,
        0
    );

    return (
        <div className="orders-page">
            <h1>All Orders</h1>
            <div className="earnings">
                <p className="earnings-label">Total Earnings:</p>
                <p className="earnings-value">${totalEarnings.toFixed(2)}</p>
            </div>
            <div className="orders-list">
                {orders.map((order) => (
                    <div className="order-card" key={order.id}>
                        <div className="order-header">
                            <h2>Order #{order.id}</h2>
                            <span className={`order-status ${order.status.toLowerCase()}`}>
                                {order.status}
                            </span>
                        </div>
                        <div className="order-details">
                            <p>
                                <span className="order-label">Customer:</span> {order.customer}
                            </p>
                            <p>
                                <span className="order-label">Contact:</span> {order.contact}
                            </p>
                            <p>
                                <span className="order-label">Date:</span> {order.date}
                            </p>
                            <p>
                                <span className="order-label">Expected Delivery:</span> {order.deliveryDate}
                            </p>
                            <p>
                                <span className="order-label">Price:</span> ${order.price.toFixed(2)}
                            </p>
                            <p>
                                <span className="order-label">Quantity:</span> {order.quantity}
                            </p>
                            {/* Add more order details as needed */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersPage;
