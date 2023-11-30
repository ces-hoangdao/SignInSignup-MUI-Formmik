import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtibCe24nUHrGa3v-SS8TSyDoCrdjZ3dc",
  authDomain: "signin-signup-47b3b.firebaseapp.com",
  projectId: "signin-signup-47b3b",
  storageBucket: "signin-signup-47b3b.appspot.com",
  messagingSenderId: "391013041092",
  appId: "1:391013041092:web:ee26a99b4a036441411a91",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
