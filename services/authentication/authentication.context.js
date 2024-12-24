import React, { useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

import { app } from "../../app/_layout";

// const firebaseConfig = {
//   apiKey: "AIzaSyCxbLQQwUW-bc5Ne3MxZGkokMj3S9xQEa4",
//   authDomain: "mealstogo-61623.firebaseapp.com",
//   projectId: "mealstogo-61623",
//   storageBucket: "mealstogo-61623.firebasestorage.app",
//   messagingSenderId: "571447144982",
//   appId: "1:571447144982:web:f50c54a2a6efcc61e0bb37",
//   measurementId: "G-H5V6FX5CLV",
// };

// export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((loginUser) => {
        setUser(loginUser);
        setIsAuthenticated(true);
        setIsLoading(false);

        console.log(user);
        console.log("successful");
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.code);
        // console.log(error.code);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }

    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((registerUser) => {
        // Signed up

        setUser(registerUser);
        setIsAuthenticated(true);
        setIsLoading(false);

        console.log(user);
        console.log("successful");
        // ...
      })
      .catch((e) => {
        const errorCode = e.code;
        setError(e.message.toString());
        setIsLoading(false);
        // ..
      });
  };

  const onLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        isAuthenticated,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
