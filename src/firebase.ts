import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: 'biblio-ff8b3',
  storageBucket: 'biblio-ff8b3.firebasestorage.app',
  messagingSenderId: '579964881233',
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const timeStamp = serverTimestamp;

export { db, timeStamp };
