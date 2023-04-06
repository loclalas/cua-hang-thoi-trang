import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvh7NHZ6CN8JfSbEKwzIwVauQMyBvd7mI",
  authDomain: "cua-hang-thoi-trang.firebaseapp.com",
  projectId: "cua-hang-thoi-trang",
  storageBucket: "cua-hang-thoi-trang.appspot.com",
  messagingSenderId: "745521011462",
  appId: "1:745521011462:web:4a4de21df832ac27145c87",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Cung cấp provider:
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

// Cung cấp Auth:
export const auth = getAuth();

// Liên kết google và pass vào Auth và Provider:
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Database từ Firestone:
export const db = getFirestore();

// Tạo database:
export const createUserDocumentFromAuth = async (userAuth) => {
  // Trỏ vào data:
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  // Kiểm tra data đã tồn tại chưa, nếu chưa thì thêm.
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error Create", error.message);
    }
  }

  return userDocRef;
};
