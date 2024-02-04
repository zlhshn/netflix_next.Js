"use client";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "@/auth/firebase";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "@/helpers/ToastNotify";
import { useDispatch } from "react-redux";
import { loginSuccess, logoutSuccess } from "@/lib/features/authSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  let router = useRouter();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      router.push("/profile");
      toastSuccessNotify("Registered successfully!");
      console.log(userCredential);
    } catch (err) {
      toastErrorNotify(err.message);
      // alert(err.message);
    }
  };

 
  const signIn = async (email, password) => {
    try {
     await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      userObserver();
      router.push("/profile");
      toastSuccessNotify("Logged in successfully!");
  
    } catch (err) {
      toastErrorNotify(err.message);
    
    }
  };

  const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Logged out successfully!");
  };

  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        dispatch(loginSuccess({ email, displayName, photoURL }));
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        dispatch(logoutSuccess());
        sessionStorage.clear();
      }
    });
  };

  const signUpProvider = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        router.push("/profile");
        toastSuccessNotify("Logged in successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastWarnNotify("Please check your mail box!");
      })
      .catch((err) => {
        toastErrorNotify(err.message);
      });
  };
  return {
    createUser,
    signIn,
    logOut,
    signUpProvider,
    forgotPassword,
  };
};

export default useAuth;
