const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth } = require("firebase/auth");
const { getStorage } = require("firebase/storage");


const firebaseConfig = {
  apiKey: "AIzaSyBnOvqHSzLPv04DrI6S4sI4h93_i9toTXw",
  authDomain: "hrm-dms.firebaseapp.com",
  projectId: "hrm-dms",
  storageBucket: "hrm-dms.appspot.com",
  messagingSenderId: "219760288968",
  appId: "1:219760288968:web:8fe82407f6a5c51b12f1fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

module.exports = { db, auth, storage };