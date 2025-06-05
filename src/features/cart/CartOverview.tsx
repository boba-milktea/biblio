import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getCartQty, getTotalPrice } from './cartSilce';

function CartOverview() {
  const totalQty = useAppSelector(getCartQty);
  const totalPrice = useAppSelector(getTotalPrice);
  
  if (!totalQty) return null;
  
  return (
    <div>
      <p>
        <span>{totalQty}</span>
        <span>{totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
