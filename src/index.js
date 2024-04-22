import { initializeApp} from 'firebase/app';
import {
    getAuth,signInWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBkTdIOYe8EmG5CVY0QlTcWPyZsFkFzu0s",
  authDomain: "univen-room-admission.firebaseapp.com",
  projectId: "univen-room-admission",
  storageBucket: "univen-room-admission.appspot.com",
  messagingSenderId: "671206129429",
  appId: "1:671206129429:web:4156d3381c8e418cea331c"
};

initializeApp(firebaseConfig);
const auth = getAuth();

const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            window.location.href = "main.html";
        }).catch((err) => {
            let errorMessage;
            switch (err.code) {
                case "auth/invalid-email":
                    errorMessage = "Invalid email format, please enter correct email";
                    break;
                case "auth/user-disabled":
                    errorMessage = "User account is disabled.";
                    break;
                case "auth/user-not-found":
                    errorMessage = "User not found.";
                    break;
                case "auth/invalid-credential":
                    errorMessage = "User not found.";
                    break;
                case "auth/wrong-password":
                    errorMessage = "Incorrect password.";
                    break;
                case "auth/too-many-requests":
                    errorMessage = "Too many unsuccessful login attempts. Please try again later.";
                    break;
                case "auth/missing-password":
                    errorMessage = "Password is required";
                    break;
                default:
                    errorMessage = err.message;
            }
            document.querySelector('.error').textContent = errorMessage;
        });
});


