import { Link } from 'react-router-dom';
const fakeCart = [
  {
    bookId: 12,
    name: 'A good night sleep',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32
  },
  {
    bookId: 6,
    name: 'Fox in the forest',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13
  },
  {
    bookId: 11,
    name: 'Spinach and Soup',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15
  }
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <Link to="/menu">&larr; Back to menu</Link>

      <h2>Your cart, %NAME%</h2>

      <div>
        <Link to="/order/new">Order pizzas</Link>
        <button>Clear cart</button>
      </div>
    </div>
  );
}

export default Cart;
