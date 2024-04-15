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
const colRef = collection(db, 'F1.Residence');
const allocate = document.querySelector('.btn button');

getDocs(colRef)
    .then((snapshot)=>{
        let  Residence= []
        snapshot.docs.forEach((doc) =>{
            Residence.push({ ...doc.data(), id: doc.id})// the ... helps speard the data
        });
        console.log(Residence);
        const data = snapshot.docs[0].data(); // Assuming you have only one document
                    document.getElementById('room1').value = data.room1;
                    document.getElementById('floor1').value = data.floor1;
                    document.getElementById('block1').value = data.block1;
                    document.getElementById('studentNo1').value = data.studentNo1;
                    document.getElementById('surname1').value = data.surname1;
                    document.getElementById('initials1').value = data.initials1;
                    document.getElementById('bs1').value = data.bs1;
                    document.getElementById('year1').value = data.year1;
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

    // Reference to the document you want to update
    const roomDocRef = doc(db, 'F1.Residence', 'roomNo');

    // Update the document
    updateDoc(roomDocRef, {
        room: room1,
        floor: floor1,
        block: block1,
        studentNo: studentNo1,
        surname: surname1,
        initials: initials1,
        bs: bs1,
        year: year1
    })
    .then(() => {
        console.log("Document successfully updated!");
    })
    .catch((error) => {
        console.error("Error updating document: ", error);
    });
});