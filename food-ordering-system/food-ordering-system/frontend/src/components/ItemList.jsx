export default function ItemList({ items, onAdd }) {
  return (
    <div className="items">
      {items.map(i => (
        <div className="card" key={i._id}>
          <h3>{i.name}</h3>
          <p><b>Restaurant:</b> {i.restaurant}</p>
          <p><b>Price:</b> ₹{i.price}</p>
          <button className="button" onClick={() => onAdd(i)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
