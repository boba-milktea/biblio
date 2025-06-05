import {
  Form,
  redirect,
  useActionData,
  useNavigation,
  type ActionFunction,
  type ActionFunctionArgs
} from 'react-router-dom';
import { createOrder } from '../../services/createOrder';

import type { CartItem, CartOrderType } from '../../types/cartOrderType';
import Button from '../../components/Button';
import { useAppSelector } from '../../hooks';
import { clearCart, getCart, getTotalPrice } from '../cart/cartSilce';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { useState } from 'react';

const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


const CreateOrder = () => {
  const username = useAppSelector((state) => state.user.username);
  const [isPriority, setIsPriority] = useState(false);
  const cart = useAppSelector(getCart);

  const totalCartPrice = useAppSelector(getTotalPrice);
  const priorityPrice = isPriority ? totalCartPrice * 0.2 : 0;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <h2>Ready to order?</h2>
      <Form method="POST">
        <div>
          <label htmlFor="customer">First Name</label>
          <input defaultValue={username} type="text" name="customer" required />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input type="tel" name="phone" required />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" required />
        </div>
        <div>
          <label htmlFor="priority">Want to yo give your order priority?</label>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={isPriority}
            onChange={(e) => setIsPriority(e.target.checked)}
          />
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div>{totalCartPrice}</div>
        <Button disabled={isSubmitting}>
          {isSubmitting ? 'Placing Order...' : `Order from ${priorityPrice} `}
        </Button>
      </Form>
    </div>
  );
};

export const newOrderAction: ActionFunction = async ({
  request
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const cart: CartItem[] = JSON.parse(String(data.cart));

  const order: CartOrderType = {
    customer: String(data.customer),
    address: String(data.address),
    phone: String(data.phone),
    position: String(data.position),
    cart,
    priority: data.priority === 'on'
  };

  // handle phone error
  const errors: { phone?: string } = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = 'Please provide a valid phone number in case of urgency';
  }

  // retrn erros to be picked up by Action
  if (Object.keys(errors).length > 0) return errors;

  // if all good, redirect to the order page
  const newOrderId = await createOrder('orders', order);

  // there should be a work around or a better solution.
  store.dispatch(clearCart());

  return redirect(`/order/${newOrderId}`);
};

export default CreateOrder;
