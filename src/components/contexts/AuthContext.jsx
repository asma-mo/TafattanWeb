import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase'; // Make sure this path is correct
import { onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
   setCurrentUser(userCredential.user);
    return userCredential;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const value = {
    currentUser,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
