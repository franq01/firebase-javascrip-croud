  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD-6PXBK9EPAfVjw9uu06XeRtanCsmnnNE",
    authDomain: "fir-javascrip-croud.firebaseapp.com",
    projectId: "fir-javascrip-croud",
    storageBucket: "fir-javascrip-croud.appspot.com",
    messagingSenderId: "16966987579",
    appId: "1:16966987579:web:21993da401616c8d8e511e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export  const saveTask  = (title, description ) =>{
    console.log(title, description)
  }
  