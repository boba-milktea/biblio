import DeleteItem from '../../components/DeleteItem';
import ItemQty from '../../components/ItemQty';
import { useAppSelector } from '../../hooks';
import { formatCurrency } from '../../utils/formatCurrency';
import { getItemQty } from './cartSilce';
import type { CartItemType } from '../../types/cartOrderType';

const CartItem = ({ item }: { item: CartItemType }) => {
  const qty: number | null = useAppSelector(getItemQty(item.bookId));
  return (
    <li className=" flex items-center justify-between p-4 shadow-md shadow-muted-text rounded-xl border-border border-b-2">
      <div className="flex">
        <p>{item.quantity} X</p>
        <p> {item.name} </p>
      </div>
      <div className="flex flex-col gap-1 items-center md:flex-row md:gap-2">
        <ItemQty bookId={item.bookId} qty={qty} />
        <p>{formatCurrency(item.totalPrice)}</p>
        <DeleteItem bookId={item.bookId} />
      </div>
    </li>
  );
};

export default CartItem;
