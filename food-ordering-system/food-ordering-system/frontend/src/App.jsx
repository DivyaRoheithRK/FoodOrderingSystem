import { useEffect, useState } from 'react';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import './styles.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then(res => res.json())
      .then(setItems)
      .catch(err => console.error(err));
  }, []);

  function addToCart(item) {
    setCart(prev => {
      const found = prev.find(p => p.item._id === item._id);
      if (found) {
        return prev.map(p => p.item._id === item._id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { item, quantity: 1 }];
    });
  }

  function removeFromCart(itemId) {
    setCart(prev => prev.filter(p => p.item._id !== itemId));
  }

  async function placeOrder() {
    const userRes = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test User', email: 'test@example.com' })
    });
    const user = await userRes.json();
    const itemsForOrder = cart.map(c => ({ itemId: c.item._id, quantity: c.quantity }));
    const orderRes = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user._id, items: itemsForOrder })
    });
    const order = await orderRes.json();
    alert('Order placed! Order ID: ' + order._id + '\nTotal: ' + order.totalPrice);
    setCart([]);
  }

  return (
    <div>
      <header className="header">
        <h1>Food Ordering System</h1>
        <div>Cart: {cart.reduce((s, c) => s + c.quantity, 0)}</div>
      </header>

      <ItemList items={items} onAdd={addToCart} />

      <Cart cart={cart} onRemove={removeFromCart} onPlaceOrder={placeOrder} />
    </div>
  );
}
