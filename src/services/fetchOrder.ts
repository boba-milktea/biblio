import { db } from '../firebase';
import { getDoc, doc } from 'firebase/firestore';

export const fetchOrder = async (id: string) => {
  try {
    const docRef = doc(db, 'orders', id);
    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
      throw new Error(`Can't find the order with Id - ${id}`);
    } else {
      const document = { ...snapshot.data(), id: snapshot.id };
      return document;
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};
