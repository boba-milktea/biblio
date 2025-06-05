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
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2>Your cart, {username}</h2>

      <ul>
        {cart.map((item) => (
          <CartItem key={item.bookId} item={item} />
        ))}
      </ul>

      <div>
        <Button to="/order/new">Order Now</Button>
      </div>

      <Button onClick={() => dispatch(clearCart())}>Clear cart</Button>
    </div>
  );
}

export default Cart;
