import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getCartQty, getTotalPrice } from './cartSilce';
import { CgShoppingCart } from 'react-icons/cg';
import { formatCurrency } from '../../utils/formatCurrency';

function CartOverview() {
  const totalQty = useAppSelector(getCartQty);
  const totalPrice = useAppSelector(getTotalPrice);

  if (!totalQty) return null;

  return (
    <div className="w-full flex p-4 text-base lg:text-lg xl:text-xl bg-link text-surface items-center justify-between font-bold">
      <p className="flex gap-2">
        <span>{totalQty} books</span>
        <span> {formatCurrency(totalPrice)} </span>
      </p>
      <Link
        className="flex text-base lg:text-lg xl:text-xl items-center hover:underline"
        to="/cart"
      >
        Open Cart
        <CgShoppingCart className="mr-2 size-6" />
      </Link>
    </div>
  );
}

export default CartOverview;
