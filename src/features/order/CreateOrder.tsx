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

const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    bookId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32
  },
  {
    bookId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13
  },
  {
    bookId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15
  }
];

const CreateOrder = () => {
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const formErrors = useActionData();

  return (
    <div>
      <h2>Ready to order?</h2>
      <Form method="POST" action="/order/new">
        <div>
          <label htmlFor="customer">First Name</label>
          <input type="text" name="customer" required />
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
          <input type="checkbox" name="priority" id="priority" />
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Placing Order...' : 'Order now'}
        </button>
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
  const errors = { phone: '' };
  if (!isValidPhone(order.phone)) {
    errors.phone = 'Please provide a valid phone number in case of urgency';
  }

  // retrn erros to be picked up by Action
  if (Object.keys(errors).length > 0) return errors;

  // if all good, redirect to the order page
  const newOrderId = await createOrder('orders', order);
  return redirect(`/order/${newOrderId}`);
};

export default CreateOrder;
