import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDUpuZj1XcK_QN-M7L206wLiVIFQmp75xY",
    authDomain: "image-330a5.firebaseapp.com",
    databaseURL: "https://image-330a5.firebaseio.com",
    projectId: "image-330a5",
    storageBucket: "image-330a5.appspot.com",
    messagingSenderId: "644668823938",
    appId: "1:644668823938:web:a4e6a1f32b4ad4d56a579b",
    measurementId: "G-4E7H7083J7"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
