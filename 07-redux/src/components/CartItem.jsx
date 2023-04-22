const CartItem = ({ data, delOneFromCart, delAllFromCart }) => {
  const { id, name, price, quantity } = data;

  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 (x{quantity}) = ${price * quantity}
      </h5>
      <button onClick={() => delOneFromCart(id)}>Eliminar Uno</button>
      <button onClick={() => delAllFromCart(id, true)}>Eliminar Todos</button>
    </div>
  );
};

export default CartItem;
