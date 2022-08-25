import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"
import { getFirestore,doc, setDoc } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyC5DkHaXFXucabCEFybhYposyU_u2OWxvU",
    authDomain: "shilpkaar-e2ffd.firebaseapp.com",
    databaseURL: "https://shilpkaar-e2ffd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shilpkaar-e2ffd",
    storageBucket: "shilpkaar-e2ffd.appspot.com",
    messagingSenderId: "1084951116825",
    appId: "1:1084951116825:web:bb88598189963c3a39fe88"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log("auth loaded");

let loginUser = ()=>{
    let email = document.getElementById("email-login").value;
    let password = document.getElementById("password-login").value;

    document.getElementById("login-fail-nouser").style.display = "none"
    document.getElementById("login-fail-password").style.display = "none"

    signInWithEmailAndPassword(auth, email, password).then((data)=>{
        console.log(data.user.uid);
        // location.assign("./pricing.html")
        document.getElementById("login-success").style.display = "block"
        location.assign("../bazar.html")
    }).catch(e=>{
        if(e.code == "auth/user-not-found"){
        document.getElementById("login-fail-nouser").style.display = "block"
        }else if(e.code=="auth/wrong-password"){
            document.getElementById("login-fail-password").style.display = "block"
        }})

}

let signUpUser = ()=> {
    document.getElementById("create-used").style.display = "none"
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let contact = document.getElementById("contact").value;
    let state = document.getElementById("state").value;
    let pincode = document.getElementById("pincode").value;
    let address = document.getElementById("address").value;

    createUserWithEmailAndPassword(auth, email, password).then((data)=>{
        console.log(data.user.uid);
        
        setDoc(doc(db, "users", data.user.uid), {
            name: name,
            email: email,
            contact: contact,
            state: state,
            pincode: pincode,
            address: address
          });
        document.getElementById("create-success").style.display = "block"
    })
        .catch(e=>{
            if(e.code == "auth/email-already-in-use"){
                document.getElementById("create-used").style.display = "block"
            }
        })
}

document.getElementById("create-used").style.display = "none"
document.getElementById("signUpBtn").addEventListener("click", signUpUser)
document.getElementById("loginBtn").addEventListener("click", loginUser)
document.getElementById("login-success").style.display = "none"
document.getElementById("login-fail-nouser").style.display = "none"
document.getElementById("login-fail-password").style.display = "none"
document.getElementById("create-success").style.display = "none"