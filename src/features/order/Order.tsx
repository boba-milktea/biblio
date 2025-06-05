import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/getOrder';
import type { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getTotalPrice } from '../cart/cartSilce';

const Order = () => {
  const order = useLoaderData();
  const { priority, priorityPrice, estimatedDelivery, orderPrice } = order;
  const totalCartPrice = useAppSelector(getTotalPrice);

  console.log(orderPrice);
  return (
    <div className="flex flex-col gap-4 p-2 w-11/12 lg:w-6/12 mx-auto">
      <div>
        <h2 className="text-xl lg:text-2xl">Status</h2>

        <div>{priority && <span>Priority</span>}</div>
      </div>

      <div>
        <p>Only {estimatedDelivery} minutes left</p>
        <p>(Estimated delivery: {estimatedDelivery})</p>
      </div>

      <div>
        <p>Price pizza: {totalCartPrice}</p>
        {priority && <p>Price priority: {priorityPrice}</p>}
        <p>To pay on delivery: {orderPrice + priorityPrice}</p>
      </div>
    </div>
  );
};

export const orderLoader: LoaderFunction = async ({
  params
}: LoaderFunctionArgs) => {
  const { orderId } = params;
  const order = await getOrder(orderId);

  if (!orderId) {
    throw new Response('Order ID is required', { status: 400 });
  }

  return order;
};

export default Order;
