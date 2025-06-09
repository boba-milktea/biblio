import Button from './Button';
import { increaseQty, decreaseQty } from '../features/cart/cartSilce';
import { useAppDispatch } from '../hooks';

const ItemQty = ({ bookId, qty }: { bookId: string; qty: number | null }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center">
      <Button type="small" onClick={() => dispatch(decreaseQty(bookId))}>
        -
      </Button>
      <span className="px-2">{qty}</span>
      <Button type="small" onClick={() => dispatch(increaseQty(bookId))}>
        +
      </Button>
    </div>
  );
};

export default ItemQty;
