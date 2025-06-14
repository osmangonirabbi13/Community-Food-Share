import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import auth from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      const userEmail = currentUser?.email || user?.email;
      // set a token for this user
      if (currentUser) {
        axios
          .post(
            "http://localhost:3000/jwt",
            { email: userEmail },
            { withCredentials: true }
          )
          .then((res) => {
            console.log("Token set : ", res.data);
          });
      } // set a token for this user end
      //remove token if user logout
      else {
        axios
          .post(
            "http://localhost:3000/logout",
            { email: userEmail },
            { withCredentials: true }
          )
          .then((res) => {
            console.log("Token removed", res.data);
          });
      } //remove token if user logout end
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  const authInfo = {
    loading,
    createUser,
    signIn,
    signInGoogle,
    signOutUser,
    user,
    updateUserProfile,
    setUser,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
