import Button from './Button';
import { increaseQty, decreaseQty } from '../features/cart/cartSilce';
import { useAppDispatch } from '../hooks';

const ItemQty = ({ bookId, qty }: { bookId: string; qty: number }) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(decreaseQty(bookId))}>-</Button>
      <span>{qty}</span>
      <Button onClick={() => dispatch(increaseQty(bookId))}>+</Button>
    </div>
  );
};

export default ItemQty;
