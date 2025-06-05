import DeleteItem from '../../components/DeleteItem';
import ItemQty from '../../components/ItemQty';
import { useAppSelector } from '../../hooks';
import { getItemQty } from './cartSilce';

const CartItem = ({ item }) => {

  const qty = useAppSelector(getItemQty(item.bookId))
  return (
    <li className="flex items-center justify-between mt-8">
      <div className="flex ">
        <p>{item.quantity} x </p>
        <p> {item.name}</p>
      </div>
      <div className="flex gap-2">
        <ItemQty bookId={item.bookId} qty={qty}/>
        <p>{item.totalPrice}</p>
        <DeleteItem bookId={item.bookId} />
      </div>
    </li>
  );
};

export default CartItem;
