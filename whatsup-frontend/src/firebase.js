import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyCkxc3mVmA_xF5Nel2DaHh4jvHbDopO3Tg",
    authDomain: "whatsup-93d6c.firebaseapp.com",
    projectId: "whatsup-93d6c",
    storageBucket: "whatsup-93d6c.appspot.com",
    messagingSenderId: "1079047640834",
    appId: "1:1079047640834:web:5685caf6612cb01be6d41b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };