import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, 
    addDoc, deleteDoc, doc,
    query, where,
    getDoc, updateDoc,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkTdIOYe8EmG5CVY0QlTcWPyZsFkFzu0s",
  authDomain: "univen-room-admission.firebaseapp.com",
  projectId: "univen-room-admission",
  storageBucket: "univen-room-admission.appspot.com",
  messagingSenderId: "671206129429",
  appId: "1:671206129429:web:4156d3381c8e418cea331c"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, 'F1.Resindene');
const allocate = document.querySelector('.btn button');

getDocs(colRef)
    .then((snapshot)=>{
        let  Resindene= []
        snapshot.docs.forEach((doc) =>{
            Resindene.push({ ...doc.data(), id: doc.id})// the ... helps speard the data
        });
        console.log(Resindene);
    })
    .catch(err =>{
        console.log(err.message);
    });

allocate.addEventListener('click', (e) => {
    e.preventDefault();

    // For F1
    const room1 = document.getElementById('room1').innerText;
    const floor1 = document.getElementById('floor1').innerText;
    const block1 = document.getElementById('block1').innerText;
    const studentNo1 = document.getElementById('studentNo1').value;
    const surname1 = document.getElementById('surname1').value;
    const initials1 = document.getElementById('initials1').value;
    const bs1 = document.getElementById('bs1').value;
    const year1 = document.getElementById('year1').value;

    // Adding the document to Firestore
    addDoc(colRef, {
        roomNo: room1,
        floorNo: floor1,
        blockNo: block1,
        studentNo: studentNo1,
        surname: surname1,
        initials: initials1,
        bursarySponsor: bs1,
        period: year1
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    
});