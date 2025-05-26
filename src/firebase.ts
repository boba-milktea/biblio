import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: 'techbibli',
  storageBucket: 'techbibli.firebasestorage.app',
  messagingSenderId: '199217273055',
  appId: '1:199217273055:web:8f5b0d99435db6512c316a',
  measurementId: 'G-SMB52DJZVE'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
