import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// creating context API and export it.
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

// Add and initialize the Authentication SDK
const auth = getAuth(app);

// auth  provider component is responsible for providing the authentication context to its child components.
function AuthProvider({ children }) {
  // state declaration for user used in observer (unsubscribe)
  const [user, setUser] = useState(null);

  // loading state
  const [loading, setLoading] = useState(true);

  // register / sign-up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login / unsubscribe
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // reset password function
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // logout / sign-out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // setting an observer, getting currently signed-in user and putting into user state

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(
        "Observing current user inside useEffect of AuthProvider",
        currentUser,
      );
      setLoading(false); // ✅ very important
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // google sign in
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github sign in
  const githubProvider = new GithubAuthProvider();
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // facebook sign in
  const facebookAuthProvider = new FacebookAuthProvider();

  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookAuthProvider);
  };

  // value to pass to all child
  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    googleSignIn,
    githubSignIn,
    facebookSignIn,
    resetPassword,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
