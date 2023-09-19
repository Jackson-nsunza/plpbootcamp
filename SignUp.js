
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";


//Login fields from the login 
const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("password");
const submitbtn = document.getElementById("submit");

//Accaount Creation
const Emailsignup = document.getElementById("email-signup");
const confirmEmailsignup = document.getElementById("confirm-email-signup");
const passwordsignup = document.getElementById("password-signup");
const Confirmpasswordsignup = document.getElementById("confirm-password-signup");
const createaccountbtn = document.getElementById("create-accaunt-btn");

const main = document.getElementById("main");
const signupbtn = document.getElementById("sign-up");



const createaccount = document.getElementById("create-accaunt");
const returnbutton = document.getElementById("return-btn");

//function used to initialize event when clicked so as to show the sign up page
signupbtn.addEventListener("click", function(){
    main.style.display = "none";
    createaccount.style.display = "block";
  });

  returnbutton.addEventListener("click", function(){
    main.style.display = "block";
    createaccount.style.display = "none";
  });

  


const firebaseConfig = {
    apiKey: "AIzaSyBuFP--R7gnW0KnR8yvr8XZJCH5vXZvBa4",
    authDomain: "bootcamp-98686.firebaseapp.com",
    projectId: "bootcamp-98686",
    storageBucket: "bootcamp-98686.appspot.com",
    messagingSenderId: "392928351877",
    appId: "1:392928351877:web:76ea74e71c9c6e72f4bbec",
    measurementId: "G-8C1NV2MY8D"
  };

    // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  var email,
      password,
      signupEmail,
      signupPassword,
      confirmsignupEmail,
      confirmSignupPassword;

createaccountbtn.addEventListener("click", function (){
console.log("Hello There")
var isvarified = true;

signupEmail = Emailsignup.value;
confirmsignupEmail = confirmEmailsignup.value;
if(signupEmail != confirmsignupEmail) {
  window.alert("Email Inputs Does Not Match");
  isvarified = false;
}
signupPassword = passwordsignup.value;
confirmSignupPassword = Confirmpasswordsignup.value;
if(signupPassword != confirmSignupPassword){
  window.alert("Password inputs Does not Match");
  isvarified = false;
}

if( 
  email == null ||
  password == null ||
  signupEmail == null ||
  confirmsignupEmail == null ||
  signupPassword == null ||
  confirmSignupPassword == null 
){
window.alert("Please Fill out the form");
}

if(isvarified){
  createUserWithEmailAndPassword(auth,signupEmail,signupPassword)
  .then((userCredentials) => {
    window.alert("success!, Account Created");
    window.location = "CreateTask.html";

  }) 
  .catch((error) => {
window.alert("Error Occured. Try Again");
  });
}

});

submitbtn.addEventListener("click", function () {
  email = emailinput.value;
  password = passwordinput.value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredentials) => {
    window.alert("Success!, Welcome Back "+email);
    window.location = "CreateTask.html";
  })
  .catch((error) => {
    const errorMessage = error.message;
    window.alert("Sorry!, Invalid Credentials");
  });
});

