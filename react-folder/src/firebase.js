import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGlcjp6klynR-VSUdWVmGcu58QVcZpC3c",
  authDomain: "authent-29778.firebaseapp.com",
  databaseURL: "https://authent-29778.firebaseio.com",
  projectId: "authent-29778",
  storageBucket: "authent-29778.appspot.com",
  messagingSenderId: "532624905869",
  appId: "1:532624905869:web:e1b4e5f8cd5bdc3d50b4c4",
  measurementId: "G-YYESS7290F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
