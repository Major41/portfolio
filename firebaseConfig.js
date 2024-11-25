import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDlI7RuIDLRZ2LQrXFH1wKOFgz0agEx8QI',
  authDomain: 'portfolio-form-8fda6.firebaseapp.com',
  projectId: 'portfolio-form-8fda6',
  storageBucket: 'portfolio-form-8fda6.firebasestorage.app',
  messagingSenderId: '71677885861',
  appId: '1:71677885861:web:71f8a79f085fb67fb0fc4c',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
