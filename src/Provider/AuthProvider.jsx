import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    loading,
    createUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
