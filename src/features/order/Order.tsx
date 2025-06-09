import { useLoaderData } from 'react-router-dom';
import { fetchOrder } from '../../services/fetchOrder';
import type { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';
import { calcDeliveryTime } from '../../utils/calcDeliveryTime';
import type { CartItemType } from '../../types/cartOrderType';
import OrderItem from './OrderItem';

const Order = () => {
  const order = useLoaderData();

  const deliveryTime = calcDeliveryTime(
    order.orderCreatedAt.seconds,
    order.priority
  );

  return (
    <div className="card">
      <div className="flex justify-between items-center">
        <h1>Thank you!</h1>

        {order.priority && (
          <span className="p-2 bg-secondary font-bold text-xl rounded-xl text-red-600">
            Priority
          </span>
        )}
      </div>

      <div className="p-2">
        <h3>Delivery Information</h3>
        <p className="text-lg md:text-xl">
          <span className="font-bold">Address: </span> {order.address}
        </p>
      </div>

      <div className="p-2">
        <h3>Your Order:</h3>
        {order.cart.map((item: CartItemType) => (
          <OrderItem item={item} key={item.bookId} />
        ))}
      </div>

      <div className="p-2">
        <p className="text-lg md:text-xl">
          <span className="font-bold">Estimated Delivery By: </span>:{' '}
          {deliveryTime}
        </p>
      </div>
    </div>
  );
};

export const orderLoader: LoaderFunction = async ({
  params
}: LoaderFunctionArgs) => {
  const { orderId } = params;

  if (!orderId) {
    throw new Response('Order ID is required', { status: 400 });
  } else return await fetchOrder(orderId);
};

export default Order;
