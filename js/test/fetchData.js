import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
console.log("loaded");


const firebaseConfig = {
    apiKey: "AIzaSyC5DkHaXFXucabCEFybhYposyU_u2OWxvU",
    authDomain: "shilpkaar-e2ffd.firebaseapp.com",
    databaseURL: "https://shilpkaar-e2ffd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shilpkaar-e2ffd",
    storageBucket: "shilpkaar-e2ffd.appspot.com",
    messagingSenderId: "1084951116825",
    appId: "1:1084951116825:web:bb88598189963c3a39fe88",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const database = getDatabase(app);


get(child(database, `products/data/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
