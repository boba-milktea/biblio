import type { CartItem } from '../types/cartOrderType';

export const parseCartItems = (raw: string): CartItem[] => {
  return JSON.parse(raw).map((item) => ({
    bookId: String(item.bookId),
    name: item.Name,
    quantity: Number(item.quantity),
    unitPrice: Number(item.unitPrice),
    totalPrice: Number(item.totalPrice)
  }));
};
