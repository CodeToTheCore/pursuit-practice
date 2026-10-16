import React from 'react';
import React from './App';




class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cartItems: []
      };
    }
  
    addItem = (product) => {
      // Logic to add product to cartItems
    };
  
    removeItem = (itemId) => {
      // Logic to remove item from cartItems
    };
  
    render() {
      return (
        <div>
          <ProductList onAddItem={this.addItem} />
          <CartSummary items={this.state.cartItems} />
        </div>
      );
    }
  }
  
  function ProductList({ onAddItem }) {
    const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    return (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => onAddItem(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    );
  }
  
  function CartSummary({ items }) {
    return (
      <div>
        Total Items: {items.length}
        {/* more summary details */}
      </div>
    );
  }
  