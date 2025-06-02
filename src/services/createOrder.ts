import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import type { CartOrderType } from '../types/cartOrderType';


export const createOrder = async (
  collectionName: string,
  data: CartOrderType
) => {
  console.log(data);
  try {
    const newOrderRef = await addDoc(collection(db, collectionName), data);
    return newOrderRef.id;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
