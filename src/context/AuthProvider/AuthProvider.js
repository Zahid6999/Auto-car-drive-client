import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    //  Create user firebase-------------
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // SignIn User----------------
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    // Update User---------------
    const upDateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    };


    // Google SignIn--------
    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    };

    // sign OUt--------
    const logOut = () => {
        return signOut(auth);
    };


    // Manage User /Observer-------------
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, []);


    // Auth Info------------
    const authInfo = { user, loading, createUser, signIn, upDateUser, googleSignIn, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;