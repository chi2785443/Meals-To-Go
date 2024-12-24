import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";
// import { app } from "../../app/_layout";

const firebaseConfig = {
  apiKey: "AIzaSyCxbLQQwUW-bc5Ne3MxZGkokMj3S9xQEa4",
  authDomain: "mealstogo-61623.firebaseapp.com",
  projectId: "mealstogo-61623",
  storageBucket: "mealstogo-61623.firebasestorage.app",
  messagingSenderId: "571447144982",
  appId: "1:571447144982:web:f50c54a2a6efcc61e0bb37",
  measurementId: "G-H5V6FX5CLV",
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const loginRequest = (email, password) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  signInWithEmailAndPassword(auth, email, password);
};
