import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getCartQty, getTotalPrice } from './cartSilce';

function CartOverview() {
  const totalQty = useAppSelector(getCartQty);
  const totalPrice = useAppSelector(getTotalPrice);

  if (!totalQty) return null;

  return (
    <div className="w-full flex p-4 bg-surface text-muted-text items-center justify-between font-bold">
      <p className="flex gap-2">
        <span>{totalQty} books</span>
        <span>$ {totalPrice} </span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
