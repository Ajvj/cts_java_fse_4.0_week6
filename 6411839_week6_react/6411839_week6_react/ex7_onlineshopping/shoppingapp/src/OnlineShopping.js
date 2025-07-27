import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  render() {
    const items = [
      { itemname: 'Shirt', price: 499 },
      { itemname: 'Jeans', price: 999 },
      { itemname: 'Shoes', price: 1299 },
      { itemname: 'Watch', price: 1999 },
      { itemname: 'Backpack', price: 799 }
    ];

    return (
      <div>
        <h1>Online Shopping Cart</h1>
        {items.map((item, index) => (
          <Cart key={index} itemname={item.itemname} price={item.price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
