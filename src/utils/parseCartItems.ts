import type { CartItemType } from '../types/cartOrderType';

export const parseCartItems = (raw: string): CartItemType[] => {
  return JSON.parse(raw).map((item: CartItemType) => ({
    bookId: String(item.bookId),
    name: item.name,
    quantity: Number(item.quantity),
    unitPrice: Number(item.unitPrice),
    totalPrice: Number(item.totalPrice)
  }));
};
