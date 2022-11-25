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
 
  export const db = getFirestore();

  export const saveTask = (title, description) =>
    addDoc(collection(db, tasks),{title, description});
  
  export const onGetTasks = (callback) =>
    onSnapshot(collection(db, "tasks"), callback);


    
export const deleteTask = (id) => deleteDoc(doc(db,"tasks", id));
export const getTasks = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));