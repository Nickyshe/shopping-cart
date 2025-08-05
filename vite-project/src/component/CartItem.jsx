import React from 'react';

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const handleKeyPress = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-controls">
        <button 
          className="quantity-btn"
          onClick={() => onDecrease(item.id)}
          onKeyPress={(e) => handleKeyPress(e, () => onDecrease(item.id))}
          disabled={item.quantity === 1}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="quantity-display">{item.quantity}</span>
        <button 
          className="quantity-btn"
          onClick={() => onIncrease(item.id)}
          onKeyPress={(e) => handleKeyPress(e, () => onIncrease(item.id))}
          aria-label="Increase quantity"
        >
          +
        </button>
        <button 
          className="remove-btn"
          onClick={() => onRemove(item.id)}
          onKeyPress={(e) => handleKeyPress(e, () => onRemove(item.id))}
          aria-label="Remove item"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
