export interface CartItem {
  bookId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface CartItemsType {
  cart: CartItem[];
}

export interface FormDetail {
  customer: string;
  address: string;
  phone: string;
}

export interface CartOrderType extends FormDetail {
  position?: string;
  cart: CartItem[];
  priority?: boolean;
}
