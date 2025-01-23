import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD9L8I4S7SnfGt5A3OQBjvKTJoe8aKKO7M",
  authDomain: "unigossip-69daf.firebaseapp.com",
  projectId: "unigossip-69daf",
  storageBucket: "unigossip-69daf.firebasestorage.app",
  messagingSenderId: "279826640424",
  appId: "1:279826640424:web:2042cdfc9431c1e73ecf1d",
  measurementId: "G-LTS5RPW1LF",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
