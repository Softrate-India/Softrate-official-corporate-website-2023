const firebaseConfig = {
    apiKey: "AIzaSyBDb_iD--XOR8NCE_XJQyPdNAroNcrigns",
    authDomain: "softrate-blogs.firebaseapp.com",
    projectId: "softrate-blogs",
    storageBucket: "softrate-blogs.appspot.com",
    messagingSenderId: "971036190553",
    appId: "1:971036190553:web:e1c0af8ac3242701414e48",
    measurementId: "G-YJNMG3MNGT"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


//auth and storage variable

export const auth = firebase.auth()
export const db = firebase.firestore()
export const provider = new firebase.auth.GoogleAuthProvider()
console.log(auth);