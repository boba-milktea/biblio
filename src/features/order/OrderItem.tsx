import type { CartItemType } from '../../types/cartOrderType';

const OrderItem = ({ item }: { item: CartItemType }) => {
  return (
    <div className="flex">
      <span>{item.quantity}X </span>
      <p>{item.name}</p>
    </div>
  );
};

export default OrderItem;
