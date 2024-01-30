import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBbcEL2NCIVom6iiqWqzab0c6BTfXGjMcY",
  authDomain: "harshportfolionetlify-3991d.firebaseapp.com",
  databaseURL: "https://harshportfolionetlify-3991d-default-rtdb.firebaseio.com",
  projectId: "harshportfolionetlify-3991d",
  storageBucket: "harshportfolionetlify-3991d.appspot.com",
  messagingSenderId: "1035916638278",
  appId: "1:1035916638278:web:11ccb1639eaea17038b247",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
