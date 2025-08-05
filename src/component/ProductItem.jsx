import React, { useState } from 'react';

function ProductItem({ product, onAddToCart, isSelected, onCardSelect }) {
  const [imageError, setImageError] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onAddToCart(product);
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleCardClick = () => {
    onCardSelect(product.id);
  };

  // Use desktop image for better quality, fallback to thumbnail if image fails to load
  const imageSrc = imageError ? '/src/assets/images/image-waffle-desktop.jpg' : product.image.desktop;

  return (
    <div className="card" tabIndex={0} onKeyPress={handleKeyPress} onClick={handleCardClick}>
      <div className={`image-container ${isSelected ? 'selected' : ''}`}>
        <img 
          src={imageSrc} 
          alt={product.name} 
          className="card-image"
          onError={handleImageError}
        />
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.category}</p>
        <div className="card-action-container">
          <button 
            className="card-action-button"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            onKeyPress={handleKeyPress}
          >
            Add to Cart
          </button>
        </div>
        <p className="card-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductItem;
