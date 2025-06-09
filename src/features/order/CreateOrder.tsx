import {
  Form,
  redirect,
  useActionData,
  useNavigation,
  type ActionFunction,
  type ActionFunctionArgs
} from 'react-router-dom';
import { createOrder } from '../../services/createOrder';

import type { CartItemType, CartOrderType } from '../../types/cartOrderType';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearCart, getCart, getTotalPrice } from '../cart/cartSilce';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { useState } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { fetchAddress } from '../user/userSlice';

const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const CreateOrder = () => {
  const {
    username,
    status: fetchStatus,
    position,
    error: fetchError,
    address
  } = useAppSelector((state) => state.user);

  const isLoading: boolean = fetchStatus === 'pending';
  const [isPriority, setIsPriority] = useState(false);
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  const totalCartPrice = useAppSelector(getTotalPrice);
  const priorityPrice = isPriority
    ? Number((totalCartPrice + totalCartPrice * 0.2).toFixed(2))
    : totalCartPrice;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();

  const handleGetPosition = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault;
    dispatch(fetchAddress());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="card">
      <h2 className="text-xl lg:text-2xl">Ready to order?</h2>

      <Form className=" flex flex-col gap-6 mt-4 w-full" method="POST">
        <div className="flex items-center">
          <label htmlFor="customer">First Name: </label>
          <input
            className="form-input ml-4 w-11/12 lg:w-8/12 xl:w-6/12"
            defaultValue={username}
            type="text"
            name="customer"
            required
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="phone">Phone number: </label>
          <input
            className="form-input ml-4 w-11/12 lg:w-8/12 xl:w-6/12"
            type="tel"
            name="phone"
            required
          />
        </div>
        {formErrors?.phone && (
          <p className="ml-4 text-red-500 font-bold">*{formErrors.phone}</p>
        )}
        <div className="flex items-center">
          <label htmlFor="address">Address: </label>
          <input
            className="form-input mx-4 w-11/12 lg:w-8/12 xl:w-6/12"
            type="text"
            name="address"
            disabled={isSubmitting}
            defaultValue={address}
            required
          />
          {!address && (
            <Button disabled={isLoading} onClick={handleGetPosition}>
              Get Position
            </Button>
          )}
        </div>
        {fetchStatus === 'error' && (
          <p className="ml-4 text-red-500 font-bold">{fetchError}</p>
        )}
        <div className="flex items-center">
          <label className="text-md font-bold lg:text-lg" htmlFor="priority">
            Want to yo give your order priority?
          </label>
          <input
            className="h-6 w-6 ml-4 bk-border"
            type="checkbox"
            name="priority"
            id="priority"
            checked={isPriority}
            onChange={(e) => setIsPriority(e.target.checked)}
          />
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="position"
          value={
            position.latitude && position.longitude
              ? `${position.latitude}, ${position.longitude}`
              : ''
          }
        />

        <Button>
          {isSubmitting
            ? 'Placing Order...'
            : `Pay Now ${formatCurrency(priorityPrice)} `}
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
  const cart: CartItemType[] = JSON.parse(String(data.cart));

  const order: CartOrderType = {
    customer: String(data.customer),
    address: String(data.address),
    phone: String(data.phone),
    position: String(data.position),
    cart,
    priority: data.priority === 'true'
  };

  console.log(order);

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
