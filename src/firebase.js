import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getAuth } from "firebase/auth"; // For Authentication
import { getStorage } from "firebase/storage"; // For Storage

// Firebase configuration from .env file
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services to use in your app
export const db = getFirestore(app); // For Firestore
export const auth = getAuth(app); // For Authentication
export const storage = getStorage(app); // For Storage
