import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div>
      <p>
        <span>3 books</span>
        <span>50€</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
