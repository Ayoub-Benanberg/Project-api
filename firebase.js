// Import Firebase modules for Node.js
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbDbMFOfnEGWYE51AHMOeHQSdW3FbQrrU",
  authDomain: "portfolio-api-583c0.firebaseapp.com",
  projectId: "portfolio-api-583c0",
  storageBucket: "portfolio-api-583c0.appspot.com",
  messagingSenderId: "553203664416",
  appId: "1:553203664416:web:374a0098c41ea59158de45"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports = db;  // Export Firestore
