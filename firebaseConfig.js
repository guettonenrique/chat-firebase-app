import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBo5NOwuAn_G0fmvRFVHlogNDCfIAOXMFs',
  authDomain: 'chat-app-study-7.firebaseapp.com',
  projectId: 'chat-app-study-7',
  storageBucket: 'chat-app-study-7.firebasestorage.app',
  messagingSenderId: '846333462477',
  appId: '1:846333462477:web:9d55a21c1edc8021982684',
  measurementId: 'G-V7Q4YPYXNW',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
