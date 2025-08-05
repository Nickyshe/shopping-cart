import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, onIncrease, onDecrease, onRemove, onConfirmOrder }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        <p className="cart-empty">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onRemove={onRemove}
          />
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span className="total-amount">${total.toFixed(2)}</span>
        </div>
        <button 
          className="confirm-order-button"
          onClick={onConfirmOrder}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
