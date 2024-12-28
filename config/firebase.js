// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc,getDocs,doc, setDoc,getDoc,onSnapshot, getDocFromCache     } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";



// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7yyCj4eHkGMKIxj4dGOU4sleV8IEN30I",
    authDomain: "watch-tux-0.firebaseapp.com",
    projectId: "watch-tux-0",
    storageBucket: "watch-tux-0.firebasestorage.app",
    messagingSenderId: "128580385834",
    appId: "1:128580385834:web:6dfb6ab4067e91ed695753",
    measurementId: "G-ZQZ1Y8QRQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { collection, addDoc, db,getDocs,doc, setDoc,getDoc,onSnapshot, getDocFromCache   }