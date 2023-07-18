import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './productpage.css';

const Productdetail = () => {
  const getRandomImageUrl = () => {
    // Replace this logic with your own to fetch random images from the internet
    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  const generateRandomImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const imageUrl = getRandomImageUrl();
      images.push({
        original: imageUrl,
        thumbnail: imageUrl,
      });
    }
    return images;
  };
const imageslink = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
  const [images, setImages] = useState(generateRandomImages());
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(9.99);
  const product=JSON.parse(localStorage.getItem("product"))
 
  const vendorName = product.vendor;
 const p=product.price*1;
  const expectedDeliveryDate = 'July 20, 2023';

  const handleQuantityChange = (event) => {
    const newQuantity = Number(event.target.value);
    setQuantity(newQuantity);
   
  };

  const handleAddToCart = () => {
    // Add your logic for adding to cart here
    console.log(`Added ${quantity} items to cart`);
  };
  
 
  return (
    <div style={{display:"flex"}}>
    <div className="slider-page">
     
      <div className="content">
        <div className="slider-container">
        <ImageGallery showPlayButton={false} items={imageslink} />
        </div>
        <div className="sidebar" style={{fontSize:"20px"}}>
          <h2>Product Details</h2>
          <h3>Title : {product.title}</h3>
          <p>Vendor: {vendorName}</p>
          <p>Description:{product.description}</p>
          <p>Cost:{p*quantity}$</p>
          <p>Category : {product.category}</p>
          <div className="quantity-input">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button style={{backgroundColor:"Green"}} onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Productdetail;
