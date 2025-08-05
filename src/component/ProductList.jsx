
import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onAddToCart, selectedCardId, onCardSelect }) {
  return (
    <div className="product-list-container">
      <h1 className="product-title">Desserts</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            isSelected={selectedCardId === product.id}
            onCardSelect={onCardSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
