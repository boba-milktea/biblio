import { addDoc, collection } from 'firebase/firestore';
import { db, timeStamp } from '../firebase';
import type { CartOrderType } from '../types/cartOrderType';

export const createOrder = async (
  collectionName: string,
  data: CartOrderType
) => {
  try {
    const orderCreatedAt = timeStamp();
    const newOrderRef = await addDoc(collection(db, collectionName), {
      ...data,
      orderCreatedAt
    });
    return newOrderRef.id;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
