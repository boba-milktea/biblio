export interface CartItem {
  bookId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface FormDetail {
  customer: string;
  address: string;
  phone: string;
}

export interface CartOrderType extends FormDetail {
  position: string;
  cart: CartItem[];
  priority: boolean;
}
