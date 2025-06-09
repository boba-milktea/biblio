export interface CartItemType {
  bookId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface CartItemsType {
  cart: CartItemType[];
}

export interface FormDetail {
  customer: string;
  address: string;
  phone: string;
}

export interface CartOrderType extends FormDetail {
  position?: string;
  cart: CartItemType[];
  priority?: boolean;
}
