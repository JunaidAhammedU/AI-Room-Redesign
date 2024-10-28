// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0IpwlizdhN-j5pXYfOGXxaA-MW-Kf4zs",
  authDomain: "ai-room-redesign-7de71.firebaseapp.com",
  projectId: "ai-room-redesign-7de71",
  storageBucket: "ai-room-redesign-7de71.appspot.com",
  messagingSenderId: "785411550416",
  appId: "1:785411550416:web:c1bbcf5c17d596d862c2d5",
  measurementId: "G-TXXJ5WLZWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); 