export default function Cart({ cart, onRemove, onPlaceOrder }) {
  const total = cart.reduce((s, c) => s + c.item.price * c.quantity, 0);
  return (
    <div className="cart">
      <h3>Cart</h3>
      {cart.length === 0 && <p>No items</p>}
      {cart.map(c => (
        <div key={c.item._id}>
          <div>{c.item.name} x {c.quantity} - ₹{c.item.price * c.quantity}</div>
          <button onClick={() => onRemove(c.item._id)}>Remove</button>
        </div>
      ))}
      <hr />
      <div><b>Total:</b> ₹{total}</div>
      <button className="button" onClick={onPlaceOrder} disabled={cart.length === 0}>Place Order</button>
    </div>
  );
}
