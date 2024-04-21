import { initializeApp} from 'firebase/app';
import {
    getAuth,signOut
} from 'firebase/auth';
import{
    getFirestore, collection, getDocs,
    
} from 'firebase/firestore'

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
const db = getFirestore();

const logoutbutton = document.querySelector('.logout');
logoutbutton.addEventListener('click', (e) => {
    signOut(auth)
        .then(() =>{
            window.location.href = "login.html";
        }).catch((err) =>{
            console.log(err.message);
        });
});

//for f1
const F1AllocateButton = document.querySelector('.F1 .BTW');
const colRef1 = collection(db, 'F1.Residence');

getDocs(colRef1)
    .then((snapshot) => {
        let Residence = [];
        snapshot.docs.forEach((doc) => {
            Residence.push({ ...doc.data(), id: doc.id });
        });

        let countAvailable = 0;
        let countTaken = 0;

        for(let i = 0; i < Residence.length; i++){
            const currentObject = Residence[i];
            // Check if the studentNo field is empty
            if (!currentObject.hasOwnProperty('studentNo') || currentObject.studentNo === '') {
                countAvailable++;
            } else {
                countTaken++;
            }
        }

        document.getElementById('available-F1').innerText = countAvailable;
        document.getElementById('takenRooms-F1').innerText = countTaken;
    });

F1AllocateButton.addEventListener('click', (e) =>{
    window.location.href = "F1.html";
});

const F2AllocateButton = document.querySelector('.F2 .BTW');
const colRef2 = collection(db, 'F2.Residence');
getDocs(colRef2)
    .then((snapshot) => {
        let Residence = [];
        snapshot.docs.forEach((doc) => {
            Residence.push({ ...doc.data(), id: doc.id });
        });

        let countAvailable = 0;
        let countTaken = 0;

        for(let i = 0; i < Residence.length; i++){
            const currentObject = Residence[i];
            if (!currentObject.hasOwnProperty('studentNo') || currentObject.studentNo === '') {
                countAvailable++;
            } else {
                countTaken++;
            }
        }

        document.getElementById('available-F2').innerText = countAvailable;
        document.getElementById('takenRooms-F2').innerText = countTaken;
    });


F2AllocateButton.addEventListener('click', (e) =>{
    window.location.href = "F2.html";
});

const F3AllocateButton = document.querySelector('.F3 .BTW');
const colRef3 = collection(db, 'F3.Residence');
getDocs(colRef3)
    .then((snapshot) => {
        let Residence = [];
        snapshot.docs.forEach((doc) => {
            Residence.push({ ...doc.data(), id: doc.id });
        });

        let countAvailable = 0;
        let countTaken = 0;

        for(let i = 0; i < Residence.length; i++){
            const currentObject = Residence[i];
            if (!currentObject.hasOwnProperty('studentNo') || currentObject.studentNo === '') {
                countAvailable++;
            } else {
                countTaken++;
            }
        }

        document.getElementById('available-F3').innerText = countAvailable;
        document.getElementById('takenRooms-F3').innerText = countTaken;
    });

F3AllocateButton.addEventListener('click', (e) =>{
    window.location.href = "F3.html";
});

const F4AllocateButton = document.querySelector('.F4 .BTW');
const colRef4 = collection(db, 'F4.Residence');
getDocs(colRef4)
    .then((snapshot) => {
        let Residence = [];
        snapshot.docs.forEach((doc) => {
            Residence.push({ ...doc.data(), id: doc.id });
        });

        let countAvailable = 0;
        let countTaken = 0;

        for(let i = 0; i < Residence.length; i++){
            const currentObject = Residence[i];
            if (!currentObject.hasOwnProperty('studentNo') || currentObject.studentNo === '') {
                countAvailable++;
            } else {
                countTaken++;
            }
        }

        document.getElementById('available-F4').innerText = countAvailable;
        document.getElementById('takenRooms-F4').innerText = countTaken;
    });
F4AllocateButton.addEventListener('click', (e) =>{
    window.location.href = "F4.html";
});

const F5AllocateButton = document.querySelector('.F5 .BTW');
const colRef5 = collection(db, 'F5.Residence');
getDocs(colRef5)
    .then((snapshot) => {
        let Residence = [];
        snapshot.docs.forEach((doc) => {
            Residence.push({ ...doc.data(), id: doc.id });
        });

        let countAvailable = 0;
        let countTaken = 0;

        for(let i = 0; i < Residence.length; i++){
            const currentObject = Residence[i];
            if (!currentObject.hasOwnProperty('studentNo') || currentObject.studentNo === '') {
                countAvailable++;
            } else {
                countTaken++;
            }
        }

        document.getElementById('available-F5').innerText = countAvailable;
        document.getElementById('takenRooms-F5').innerText = countTaken;
    });
F5AllocateButton.addEventListener('click', (e) =>{
    window.location.href = "F5.html";
});

const NewMaleAllocateButton = document.querySelector('.newMale .BTW');
const colRef6 = collection(db, 'newMale.Residence');
getDocs(colRef6)
    .then((snapshot) => {
        let Residence = [];
        snapshot.docs.forEach((doc) => {
            Residence.push({ ...doc.data(), id: doc.id });
        });

        let countAvailable = 0;
        let countTaken = 0;

        for(let i = 0; i < Residence.length; i++){
            const currentObject = Residence[i];
            if (!currentObject.hasOwnProperty('studentNo') || currentObject.studentNo === '') {
                countAvailable++;
            } else {
                countTaken++;
            }
        }

        document.getElementById('available-F6').innerText = countAvailable;
        document.getElementById('takenRooms-F6').innerText = countTaken;
    });

NewMaleAllocateButton.addEventListener('click', (e) =>{
    window.location.href = "NewMale.html";
});

const NewFemaleAllocateButton = document.querySelector('.newFemale .BTW');
const colRef7 = collection(db, 'NewFemale.Residence');
getDocs(colRef7)
    .then((snapshot) => {
        let Residence = [];
        snapshot.docs.forEach((doc) => {
            Residence.push({ ...doc.data(), id: doc.id });
        });

        let countAvailable = 0;
        let countTaken = 0;

        for(let i = 0; i < Residence.length; i++){
            const currentObject = Residence[i];
            if (!currentObject.hasOwnProperty('studentNo') || currentObject.studentNo === '') {
                countAvailable++;
            } else {
                countTaken++;
            }
        }

        document.getElementById('available-F7').innerText = countAvailable;
        document.getElementById('takenRooms-F7').innerText = countTaken;
    });

NewFemaleAllocateButton.addEventListener('click', (e) =>{
    window.location.href = "NewFemale.html";
});

const DBSAMaleAllocateButton = document.querySelector('.DBSA-male .BTW');
const colRef8 = collection(db, 'DBSAMale.Residence');
getDocs(colRef8)
    .then((snapshot) => {
        let Residence = [];
        snapshot.docs.forEach((doc) => {
            Residence.push({ ...doc.data(), id: doc.id });
        });

        let countAvailable = 0;
        let countTaken = 0;

        for(let i = 0; i < Residence.length; i++){
            const currentObject = Residence[i];
            if (!currentObject.hasOwnProperty('studentNo') || currentObject.studentNo === '') {
                countAvailable++;
            } else {
                countTaken++;
            }
        }

        document.getElementById('available-F8').innerText = countAvailable;
        document.getElementById('takenRooms-F8').innerText = countTaken;
    });

DBSAMaleAllocateButton.addEventListener('click', (e) =>{
    window.location.href = "DBSAMale.html";
});

const DBSAFemaleAllocateButton = document.querySelector('.DBSA-female .BTW');
const colRef9 = collection(db, 'DBSAMale.Residence');
getDocs(colRef9)
    .then((snapshot) => {
        let Residence = [];
        snapshot.docs.forEach((doc) => {
            Residence.push({ ...doc.data(), id: doc.id });
        });

        let countAvailable = 0;
        let countTaken = 0;

        for(let i = 0; i < Residence.length; i++){
            const currentObject = Residence[i];
            if (!currentObject.hasOwnProperty('studentNo') || currentObject.studentNo === '') {
                countAvailable++;
            } else {
                countTaken++;
            }
        }

        document.getElementById('available-F9').innerText = countAvailable;
        document.getElementById('takenRooms-F9').innerText = countTaken;
    });
DBSAFemaleAllocateButton.addEventListener('click', (e) =>{
    window.location.href = "DBSAFemale.html";
});

