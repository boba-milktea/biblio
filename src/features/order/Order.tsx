import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/getOrder';
import type { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';

const Order = () => {
  const order = useLoaderData();
  const { status, priority, priorityPrice, estimatedDelivery, orderPrice } =
    order;

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority</span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>Only {estimatedDelivery} minutes left</p>
        <p>(Estimated delivery: {estimatedDelivery})</p>
      </div>

      <div>
        <p>Price pizza: {orderPrice}</p>
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
