import { initializeApp} from 'firebase/app';
import {
    getAuth,signOut
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

const logoutbutton = document.querySelector('.logout');
logoutbutton.addEventListener('click', (e) => {
    signOut(auth)
        .then(() =>{
            window.location.href = "login.html";
        }).catch((err) =>{
            console.log(err.message);
        });
});

const F1AllocateButton = document.querySelector('.F1 .BTW');
F1AllocateButton.addEventListener('click', (e) =>{
    window.location.href = "F1.html";
});