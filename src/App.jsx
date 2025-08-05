import React, { useState } from 'react';
import products from './data.js';
import ProductList from './component/ProductList';
import Cart from './component/Cart';
import OrderConfirmationModal from './component/OrderConfirmationModal';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const found = prev.find(item => item.id === product.id);
      if (found) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleIncrease = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(prev =>
      prev.flatMap(item =>
        item.id === id
          ? item.quantity > 1
            ? [{ ...item, quantity: item.quantity - 1 }]
            : []
          : [item]
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleConfirmOrder = () => setIsModalOpen(true);

  const handleStartNewOrder = () => {
    setCartItems([]);
    setIsModalOpen(false);
  };

  const handleCardSelect = (cardId) => {
    setSelectedCardId(selectedCardId === cardId ? null : cardId);
  };

  return (
    <div className="App">
      <main className="app-main">
        <ProductList 
          products={products} 
          onAddToCart={handleAddToCart}
          selectedCardId={selectedCardId}
          onCardSelect={handleCardSelect}
        />
        <Cart
          cartItems={cartItems}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
          onConfirmOrder={handleConfirmOrder}
        />
      </main>
      <OrderConfirmationModal isOpen={isModalOpen} onClose={handleStartNewOrder} />
    </div>
  );
}

export default App;
