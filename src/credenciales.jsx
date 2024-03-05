// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWXB1kK-BBpN8aiK1t7LEli3T_0Yhgep8",
    authDomain: "taskmanagerg4.firebaseapp.com",
    projectId: "taskmanagerg4",
    storageBucket: "taskmanagerg4.appspot.com",
    messagingSenderId: "457786021713",
    appId: "1:457786021713:web:851b065a5d7bb98b626570",
    measurementId: "G-8M01FB1KFY"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;