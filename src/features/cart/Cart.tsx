import LinkButton from '../../components/LinkButton';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { clearCart, getCart } from './cartSilce';
import CartItem from './CartItem';
import Button from '../../components/Button';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useAppSelector(getCart);
  const username = useAppSelector((state) => state.user.username);
  const dispatch = useAppDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="flex flex-col gap-4 p-2">
      <LinkButton to="/books">&larr; Back to our collection</LinkButton>

      <h2 className="text-2xl">Your cart, {username}</h2>

      <ul className="flex flex-col gap-2">
        {cart.map((item) => (
          <CartItem key={item.bookId} item={item} />
        ))}
      </ul>

      <div className="flex gap-4">
        <Button onClick={() => dispatch(clearCart())}>Clear cart</Button>
        <LinkButton style="button" to="/order/new">
          Order
        </LinkButton>
      </div>
    </div>
  );
}

export default Cart;
