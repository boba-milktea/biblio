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
  const priorityPrice = isPriority
    ? (totalCartPrice + totalCartPrice * 0.2).toFixed(2)
    : totalCartPrice;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="flex flex-col gap-4 p-2 w-11/12 lg:w-6/12 mx-auto">
      <h2 className="text-xl lg:text-2xl">Ready to order?</h2>
      <Form className=" flex flex-col gap-4" method="POST">
        <div className="flex items-center">
          <label htmlFor="customer">First Name: </label>
          <input
            className="form-input ml-4"
            defaultValue={username}
            type="text"
            name="customer"
            required
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="phone">Phone number: </label>
          <input className="form-input ml-4" type="tel" name="phone" required />
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>
        <div className="flex items-center">
          <label htmlFor="address">Address: </label>
          <input
            className="form-input ml-4"
            type="text"
            name="address"
            required
          />
        </div>
        <div className="flex items-center">
          <label className="text-md font-bold lg:text-lg" htmlFor="priority">
            Want to yo give your order priority?
          </label>
          <input
            className="h-6 w-6 ml-4 bk-border"
            type="checkbox"
            name="priority"
            id="priority"
            value={isPriority}
            onChange={(e) => setIsPriority(e.target.checked)}
          />
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div className="w-11/12 lg:w-6/12">
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'Placing Order...' : `Order from ${priorityPrice} `}
          </Button>
        </div>
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
