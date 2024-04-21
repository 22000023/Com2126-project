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
const colRef = collection(db, 'newMale.Residence');
const allocate = document.querySelector('.btn button');



allocate.addEventListener('click', (e) => {
    e.preventDefault();

    // For F1
    const room1 = document.getElementById('room1').innerText;
    const floor1 = document.getElementById('floor1').innerText;
    const block1 = document.getElementById('block1').innerText;
    const studentNo1 = document.getElementById('studentNo1').value;
    const surname1 = document.getElementById('surname1').value;
    const name1 = document.getElementById('name1').value;
    const bs1 = document.getElementById('bs1').value;
    const year1 = document.getElementById('year1').value;

    // for F2
    const room2 = document.getElementById('room2').innerText;
    const floor2 = document.getElementById('floor2').innerText;
    const block2 = document.getElementById('block2').innerText;
    const studentNo2 = document.getElementById('studentNo2').value;
    const surname2 = document.getElementById('surname2').value;
    const name2 = document.getElementById('name2').value;
    const bs2 = document.getElementById('bs2').value;
    const year2 = document.getElementById('year2').value;

    //F3
    const room3 = document.getElementById('room3').innerText;
    const floor3 = document.getElementById('floor3').innerText;
    const block3 = document.getElementById('block3').innerText;
    const studentNo3 = document.getElementById('studentNo3').value;
    const surname3 = document.getElementById('surname3').value;
    const name3 = document.getElementById('name3').value;
    const bs3 = document.getElementById('bs3').value;
    const year3 = document.getElementById('year3').value;

    //F4
    const room4 = document.getElementById('room4').innerText;
    const floor4 = document.getElementById('floor4').innerText;
    const block4 = document.getElementById('block4').innerText;
    const studentNo4 = document.getElementById('studentNo4').value;
    const surname4 = document.getElementById('surname4').value;
    const name4 = document.getElementById('name4').value;
    const bs4 = document.getElementById('bs4').value;
    const year4 = document.getElementById('year4').value;

    //F5
    const room5 = document.getElementById('room5').innerText;
    const floor5 = document.getElementById('floor5').innerText;
    const block5 = document.getElementById('block5').innerText;
    const studentNo5 = document.getElementById('studentNo5').value;
    const surname5 = document.getElementById('surname5').value;
    const name5 = document.getElementById('name5').value;
    const bs5 = document.getElementById('bs5').value;
    const year5 = document.getElementById('year5').value;

    //F6
    const room6 = document.getElementById('room6').innerText;
    const floor6 = document.getElementById('floor6').innerText;
    const block6 = document.getElementById('block6').innerText;
    const studentNo6 = document.getElementById('studentNo6').value;
    const surname6 = document.getElementById('surname6').value;
    const name6 = document.getElementById('name6').value;
    const bs6 = document.getElementById('bs6').value;
    const year6 = document.getElementById('year6').value;


    //F7
    const room7 = document.getElementById('room7').innerText;
    const floor7 = document.getElementById('floor7').innerText;
    const block7 = document.getElementById('block7').innerText;
    const studentNo7 = document.getElementById('studentNo7').value;
    const surname7 = document.getElementById('surname7').value;
    const name7 = document.getElementById('name7').value;
    const bs7 = document.getElementById('bs7').value;
    const year7 = document.getElementById('year7').value;

    //F8
    const room8 = document.getElementById('room8').innerText;
    const floor8 = document.getElementById('floor8').innerText;
    const block8 = document.getElementById('block8').innerText;
    const studentNo8 = document.getElementById('studentNo8').value;
    const surname8 = document.getElementById('surname8').value;
    const name8 = document.getElementById('name8').value;
    const bs8 = document.getElementById('bs8').value;
    const year8 = document.getElementById('year8').value;

    //F9
    const room9 = document.getElementById('room9').innerText;
    const floor9 = document.getElementById('floor9').innerText;
    const block9 = document.getElementById('block9').innerText;
    const studentNo9 = document.getElementById('studentNo9').value;
    const surname9 = document.getElementById('surname9').value;
    const name9 = document.getElementById('name9').value;
    const bs9 = document.getElementById('bs9').value;
    const year9 = document.getElementById('year9').value;


    //F10
    const room10 = document.getElementById('room10').innerText;
    const floor10 = document.getElementById('floor10').innerText;
    const block10 = document.getElementById('block10').innerText;
    const studentNo10 = document.getElementById('studentNo10').value;
    const surname10 = document.getElementById('surname10').value;
    const name10 = document.getElementById('name10').value;
    const bs10 = document.getElementById('bs10').value;
    const year10 = document.getElementById('year10').value;

    //F11
    const room11 = document.getElementById('room11').innerText;
    const floor11 = document.getElementById('floor11').innerText;
    const block11 = document.getElementById('block11').innerText;
    const studentNo11 = document.getElementById('studentNo11').value;
    const surname11 = document.getElementById('surname11').value;
    const name11 = document.getElementById('name11').value;
    const bs11 = document.getElementById('bs11').value;
    const year11 = document.getElementById('year11').value;

    //F12
    const room12 = document.getElementById('room12').innerText;
    const floor12 = document.getElementById('floor12').innerText;
    const block12 = document.getElementById('block12').innerText;
    const studentNo12 = document.getElementById('studentNo12').value;
    const surname12 = document.getElementById('surname12').value;
    const name12 = document.getElementById('name12').value;
    const bs12 = document.getElementById('bs12').value;
    const year12 = document.getElementById('year12').value;

    //F13
    const room13 = document.getElementById('room13').innerText;
    const floor13 = document.getElementById('floor13').innerText;
    const block13 = document.getElementById('block13').innerText;
    const studentNo13 = document.getElementById('studentNo13').value;
    const surname13 = document.getElementById('surname13').value;
    const name13 = document.getElementById('name13').value;
    const bs13 = document.getElementById('bs13').value;
    const year13 = document.getElementById('year13').value;

    //F14
    const room14 = document.getElementById('room14').innerText;
    const floor14 = document.getElementById('floor14').innerText;
    const block14 = document.getElementById('block14').innerText;
    const studentNo14 = document.getElementById('studentNo14').value;
    const surname14 = document.getElementById('surname14').value;
    const name14 = document.getElementById('name14').value;
    const bs14 = document.getElementById('bs14').value;
    const year14 = document.getElementById('year14').value;

    //F15
    const room15 = document.getElementById('room15').innerText;
    const floor15 = document.getElementById('floor15').innerText;
    const block15 = document.getElementById('block15').innerText;
    const studentNo15 = document.getElementById('studentNo15').value;
    const surname15 = document.getElementById('surname15').value;
    const name15 = document.getElementById('name15').value;
    const bs15 = document.getElementById('bs15').value;
    const year15 = document.getElementById('year15').value;

    //F16
    const room16 = document.getElementById('room16').innerText;
    const floor16 = document.getElementById('floor16').innerText;
    const block16 = document.getElementById('block16').innerText;
    const studentNo16 = document.getElementById('studentNo16').value;
    const surname16 = document.getElementById('surname16').value;
    const name16 = document.getElementById('name16').value;
    const bs16 = document.getElementById('bs16').value;
    const year16 = document.getElementById('year16').value;

    //F17
    const room17 = document.getElementById('room17').innerText;
    const floor17 = document.getElementById('floor17').innerText;
    const block17 = document.getElementById('block17').innerText;
    const studentNo17 = document.getElementById('studentNo17').value;
    const surname17 = document.getElementById('surname17').value;
    const name17 = document.getElementById('name17').value;
    const bs17 = document.getElementById('bs17').value;
    const year17 = document.getElementById('year17').value;

    //F18
    const room18 = document.getElementById('room18').innerText;
    const floor18 = document.getElementById('floor18').innerText;
    const block18 = document.getElementById('block18').innerText;
    const studentNo18 = document.getElementById('studentNo18').value;
    const surname18 = document.getElementById('surname18').value;
    const name18 = document.getElementById('name18').value;
    const bs18 = document.getElementById('bs18').value;
    const year18 = document.getElementById('year18').value;

    //F19
    const room19 = document.getElementById('room19').innerText;
    const floor19 = document.getElementById('floor19').innerText;
    const block19 = document.getElementById('block19').innerText;
    const studentNo19 = document.getElementById('studentNo19').value;
    const surname19 = document.getElementById('surname19').value;
    const name19 = document.getElementById('name19').value;
    const bs19 = document.getElementById('bs19').value;
    const year19 = document.getElementById('year19').value;

    //F20
    const room20 = document.getElementById('room20').innerText;
    const floor20 = document.getElementById('floor20').innerText;
    const block20 = document.getElementById('block20').innerText;
    const studentNo20 = document.getElementById('studentNo20').value;
    const surname20 = document.getElementById('surname20').value;
    const name20 = document.getElementById('name20').value;
    const bs20 = document.getElementById('bs20').value;
    const year20 = document.getElementById('year20').value;

    // Reference to the document you want to update
    const roomDocRef = doc(db, 'newMale.Residence', 'roomNo');
    const roomDocRef2 = doc(db, 'newMale.Residence', 'roomNo2');
    const roomDocRef3 = doc(db, 'newMale.Residence', 'roomNo3');
    const roomDocRef4 = doc(db, 'newMale.Residence', 'roomNo4');
    const roomDocRef5 = doc(db, 'newMale.Residence', 'roomNo5');
    const roomDocRef6 = doc(db, 'newMale.Residence', 'roomNo6');
    const roomDocRef7 = doc(db, 'newMale.Residence', 'roomNo7');
    const roomDocRef8 = doc(db, 'newMale.Residence', 'roomNo8');
    const roomDocRef9 = doc(db, 'newMale.Residence', 'roomNo9');
    const roomDocRef10 = doc(db, 'newMale.Residence', 'roomNo10');
    const roomDocRef11 = doc(db, 'newMale.Residence', 'roomNo11');
    const roomDocRef12 = doc(db, 'newMale.Residence', 'roomNo12');
    const roomDocRef13 = doc(db, 'newMale.Residence', 'roomNo13');
    const roomDocRef14 = doc(db, 'newMale.Residence', 'roomNo14');
    const roomDocRef15 = doc(db, 'newMale.Residence', 'roomNo15');
    const roomDocRef16 = doc(db, 'newMale.Residence', 'roomNo16');
    const roomDocRef17 = doc(db, 'newMale.Residence', 'roomNo17');
    const roomDocRef18 = doc(db, 'newMale.Residence', 'roomNo18');
    const roomDocRef19 = doc(db, 'newMale.Residence', 'roomNo19');
    const roomDocRef20 = doc(db, 'newMale.Residence', 'roomNo20');


    // Update the document
let updatePromises = [];

// Push each update operation into the updatePromises array
updatePromises.push(updateDoc(roomDocRef, {
    room: room1,
    floor: floor1,
    block: block1,
    studentNo: studentNo1,
    surname: surname1,
    name: name1,
    bs: bs1,
    year: year1
}));

updatePromises.push(updateDoc(roomDocRef2,{
    room: room2,
    floor: floor2,
    block: block2,
    studentNo: studentNo2,
    surname: surname2,
    name: name2,
    bs: bs2,
    year: year2
}));

updatePromises.push(updateDoc(roomDocRef3,{
    room: room3,
    floor: floor3,
    block: block3,
    studentNo: studentNo3,
    surname: surname3,
    name: name3,
    bs: bs3,
    year: year3
}));

updatePromises.push(updateDoc(roomDocRef4,{
    room: room4,
    floor: floor4,
    block: block4,
    studentNo: studentNo4,
    surname: surname4,
    name: name4,
    bs: bs4,
    year: year4
}));

updatePromises.push(updateDoc(roomDocRef5,{
    room: room5,
    floor: floor5,
    block: block5,
    studentNo: studentNo5,
    surname: surname5,
    name: name5,
    bs: bs5,
    year: year5
}));

updatePromises.push(updateDoc(roomDocRef6,{
    room: room6,
    floor: floor6,
    block: block6,
    studentNo: studentNo6,
    surname: surname6,
    name: name6,
    bs: bs6,
    year: year6
}));

updatePromises.push(updateDoc(roomDocRef7,{
    room: room7,
    floor: floor7,
    block: block7,
    studentNo: studentNo7,
    surname: surname7,
    name: name7,
    bs: bs7,
    year: year7
}));

updatePromises.push(updateDoc(roomDocRef8,{
    room: room8,
    floor: floor8,
    block: block8,
    studentNo: studentNo8,
    surname: surname8,
    name: name8,
    bs: bs8,
    year: year8
}));

updatePromises.push(updateDoc(roomDocRef9,{
    room: room9,
    floor: floor9,
    block: block9,
    studentNo: studentNo9,
    surname: surname9,
    name: name9,
    bs: bs9,
    year: year9
}));

updatePromises.push(updateDoc(roomDocRef10,{
    room: room10,
    floor: floor10,
    block: block10,
    studentNo: studentNo10,
    surname: surname10,
    name: name10,
    bs: bs10,
    year: year10
}));

updatePromises.push(updateDoc(roomDocRef11,{
    room: room11,
    floor: floor11,
    block: block11,
    studentNo: studentNo11,
    surname: surname11,
    name: name11,
    bs: bs11,
    year: year11
}));

updatePromises.push(updateDoc(roomDocRef12,{
    room: room12,
    floor: floor12,
    block: block12,
    studentNo: studentNo12,
    surname: surname12,
    name: name12,
    bs: bs12,
    year: year12
}));

updatePromises.push(updateDoc(roomDocRef13,{
    room: room13,
    floor: floor13,
    block: block13,
    studentNo: studentNo13,
    surname: surname13,
    name: name13,
    bs: bs13,
    year: year13
}));

updatePromises.push(updateDoc(roomDocRef14,{
    room: room14,
    floor: floor14,
    block: block14,
    studentNo: studentNo14,
    surname: surname14,
    name: name14,
    bs: bs14,
    year: year14
}));

updatePromises.push(updateDoc(roomDocRef15,{
    room: room15,
    floor: floor15,
    block: block15,
    studentNo: studentNo15,
    surname: surname15,
    name: name15,
    bs: bs15,
    year: year15
}));

updatePromises.push(updateDoc(roomDocRef16,{
    room: room16,
    floor: floor16,
    block: block16,
    studentNo: studentNo16,
    surname: surname16,
    name: name16,
    bs: bs16,
    year: year16
}));

updatePromises.push(updateDoc(roomDocRef17,{
    room: room17,
    floor: floor17,
    block: block17,
    studentNo: studentNo17,
    surname: surname17,
    name: name17,
    bs: bs17,
    year: year17
}));

updatePromises.push(updateDoc(roomDocRef18,{
    room: room18,
    floor: floor18,
    block: block18,
    studentNo: studentNo18,
    surname: surname18,
    name: name18,
    bs: bs18,
    year: year18
}));

updatePromises.push(updateDoc(roomDocRef19,{
    room: room19,
    floor: floor19,
    block: block19,
    studentNo: studentNo19,
    surname: surname19,
    name: name19,
    bs: bs19,
    year: year19
}));

updatePromises.push(updateDoc(roomDocRef20,{
    room: room20,
    floor: floor20,
    block: block20,
    studentNo: studentNo20,
    surname: surname20,
    name: name20,
    bs: bs20,
    year: year20
}));

// Wait for all update promises to resolve
Promise.all(updatePromises)
    .then(() => {
        console.log("All documents successfully updated!");

        // After all updates are done, fetch documents again
        getDocs(colRef)
            .then((snapshot) => {
                let Residence = [];
                snapshot.docs.forEach((doc) => {
                    Residence.push({ ...doc.data(), id: doc.id });
                });
                console.log(Residence);
                    window.location.href = 'main.html';
            })
            .catch(err => {
                console.log(err.message);
            });
    })
    .catch((error) => {
        console.error("Error updating documents: ", error);
    });
});


//Stores data from the firebase to the textfields
const docRef = doc(db, 'newMale.Residence', 'roomNo');
const docRef2 = doc(db, 'newMale.Residence', 'roomNo2');
const docRef3 = doc(db, 'newMale.Residence', 'roomNo3');
const docRef4 = doc(db, 'newMale.Residence', 'roomNo4');
const docRef5 = doc(db, 'newMale.Residence', 'roomNo5');
const docRef6 = doc(db, 'newMale.Residence', 'roomNo6');
const docRef7 = doc(db, 'newMale.Residence', 'roomNo7');
const docRef8 = doc(db, 'newMale.Residence', 'roomNo8');
const docRef9 = doc(db, 'newMale.Residence', 'roomNo9');
const docRef10 = doc(db, 'newMale.Residence', 'roomNo10');
const docRef11 = doc(db, 'newMale.Residence', 'roomNo11');
const docRef12 = doc(db, 'newMale.Residence', 'roomNo12');
const docRef13 = doc(db, 'newMale.Residence', 'roomNo13');
const docRef14 = doc(db, 'newMale.Residence', 'roomNo14');
const docRef15 = doc(db, 'newMale.Residence', 'roomNo15');
const docRef16 = doc(db, 'newMale.Residence', 'roomNo16');
const docRef17 = doc(db, 'newMale.Residence', 'roomNo17');
const docRef18 = doc(db, 'newMale.Residence', 'roomNo18');
const docRef19 = doc(db, 'newMale.Residence', 'roomNo19');
const docRef20 = doc(db, 'newMale.Residence', 'roomNo20');


onSnapshot(docRef, (doc)=>{
    const fieldStudentNo1 = doc.data().studentNo;
    const fieldSurname1 = doc.data().surname;
    const fieldName1 = doc.data().name;
    const selectedFunding1 = doc.data().bs;
    const selectedYear1 = doc.data().year;
    
    
    document.getElementById('studentNo1').value = fieldStudentNo1;
    document.getElementById('surname1').value = fieldSurname1;
    document.getElementById('name1').value = fieldName1;
    document.getElementById('bs1').value = selectedFunding1;
    document.getElementById('year1').value = selectedYear1;
});

onSnapshot(docRef2, (doc) => {
    const fieldStudentNo2 = doc.data().studentNo;
    const fieldSurname2 = doc.data().surname;
    const fieldName2 = doc.data().name;
    const selectedFunding2 = doc.data().bs;
    const selectedYear2 = doc.data().year;

    document.getElementById('studentNo2').value = fieldStudentNo2;
    document.getElementById('surname2').value = fieldSurname2;
    document.getElementById('name2').value = fieldName2;
    document.getElementById('bs2').value = selectedFunding2;
    document.getElementById('year2').value = selectedYear2;
});

onSnapshot(docRef3, (doc) => {
    const fieldStudentNo3 = doc.data().studentNo;
    const fieldSurname3 = doc.data().surname;
    const fieldName3 = doc.data().name;
    const selectedFunding3 = doc.data().bs;
    const selectedYear3 = doc.data().year;

    document.getElementById('studentNo3').value = fieldStudentNo3;
    document.getElementById('surname3').value = fieldSurname3;
    document.getElementById('name3').value = fieldName3;
    document.getElementById('bs3').value = selectedFunding3;
    document.getElementById('year3').value = selectedYear3;
});

onSnapshot(docRef4, (doc) => {
    const fieldStudentNo4 = doc.data().studentNo;
    const fieldSurname4 = doc.data().surname;
    const fieldName4 = doc.data().name;
    const selectedFunding4 = doc.data().bs;
    const selectedYear4 = doc.data().year;

    document.getElementById('studentNo4').value = fieldStudentNo4;
    document.getElementById('surname4').value = fieldSurname4;
    document.getElementById('name4').value = fieldName4;
    document.getElementById('bs4').value = selectedFunding4;
    document.getElementById('year4').value = selectedYear4;
});

onSnapshot(docRef5, (doc) => {
    const fieldStudentNo5 = doc.data().studentNo;
    const fieldSurname5 = doc.data().surname;
    const fieldName5 = doc.data().name;
    const selectedFunding5 = doc.data().bs;
    const selectedYear5 = doc.data().year;

    document.getElementById('studentNo5').value = fieldStudentNo5;
    document.getElementById('surname5').value = fieldSurname5;
    document.getElementById('name5').value = fieldName5;
    document.getElementById('bs5').value = selectedFunding5;
    document.getElementById('year5').value = selectedYear5;
});

onSnapshot(docRef6, (doc) => {
    const fieldStudentNo6 = doc.data().studentNo;
    const fieldSurname6 = doc.data().surname;
    const fieldName6 = doc.data().name;
    const selectedFunding6 = doc.data().bs;
    const selectedYear6 = doc.data().year;

    document.getElementById('studentNo6').value = fieldStudentNo6;
    document.getElementById('surname6').value = fieldSurname6;
    document.getElementById('name6').value = fieldName6;
    document.getElementById('bs6').value = selectedFunding6;
    document.getElementById('year6').value = selectedYear6;
});

onSnapshot(docRef7, (doc) => {
    const fieldStudentNo7 = doc.data().studentNo;
    const fieldSurname7 = doc.data().surname;
    const fieldName7 = doc.data().name;
    const selectedFunding7 = doc.data().bs;
    const selectedYear7 = doc.data().year;

    document.getElementById('studentNo7').value = fieldStudentNo7;
    document.getElementById('surname7').value = fieldSurname7;
    document.getElementById('name7').value = fieldName7;
    document.getElementById('bs7').value = selectedFunding7;
    document.getElementById('year7').value = selectedYear7;
});

onSnapshot(docRef8, (doc) => {
    const fieldStudentNo8 = doc.data().studentNo;
    const fieldSurname8 = doc.data().surname;
    const fieldName8 = doc.data().name;
    const selectedFunding8 = doc.data().bs;
    const selectedYear8 = doc.data().year;

    document.getElementById('studentNo8').value = fieldStudentNo8;
    document.getElementById('surname8').value = fieldSurname8;
    document.getElementById('name8').value = fieldName8;
    document.getElementById('bs8').value = selectedFunding8;
    document.getElementById('year8').value = selectedYear8;
});

onSnapshot(docRef9, (doc) => {
    const fieldStudentNo9 = doc.data().studentNo;
    const fieldSurname9 = doc.data().surname;
    const fieldName9 = doc.data().name;
    const selectedFunding9 = doc.data().bs;
    const selectedYear9 = doc.data().year;

    document.getElementById('studentNo9').value = fieldStudentNo9;
    document.getElementById('surname9').value = fieldSurname9;
    document.getElementById('name9').value = fieldName9;
    document.getElementById('bs9').value = selectedFunding9;
    document.getElementById('year9').value = selectedYear9;
});

onSnapshot(docRef10, (doc) => {
    const fieldStudentNo10 = doc.data().studentNo;
    const fieldSurname10 = doc.data().surname;
    const fieldName10 = doc.data().name;
    const selectedFunding10 = doc.data().bs;
    const selectedYear10 = doc.data().year;

    document.getElementById('studentNo10').value = fieldStudentNo10;
    document.getElementById('surname10').value = fieldSurname10;
    document.getElementById('name10').value = fieldName10;
    document.getElementById('bs10').value = selectedFunding10;
    document.getElementById('year10').value = selectedYear10;
});

onSnapshot(docRef11, (doc) => {
    const fieldStudentNo11 = doc.data().studentNo;
    const fieldSurname11 = doc.data().surname;
    const fieldName11 = doc.data().name;
    const selectedFunding11 = doc.data().bs;
    const selectedYear11 = doc.data().year;

    document.getElementById('studentNo11').value = fieldStudentNo11;
    document.getElementById('surname11').value = fieldSurname11;
    document.getElementById('name11').value = fieldName11;
    document.getElementById('bs11').value = selectedFunding11;
    document.getElementById('year11').value = selectedYear11;
});

onSnapshot(docRef12, (doc) => {
    const fieldStudentNo12 = doc.data().studentNo;
    const fieldSurname12 = doc.data().surname;
    const fieldName12 = doc.data().name;
    const selectedFunding12 = doc.data().bs;
    const selectedYear12 = doc.data().year;

    document.getElementById('studentNo12').value = fieldStudentNo12;
    document.getElementById('surname12').value = fieldSurname12;
    document.getElementById('name12').value = fieldName12;
    document.getElementById('bs12').value = selectedFunding12;
    document.getElementById('year12').value = selectedYear12;
});

onSnapshot(docRef13, (doc) => {
    const fieldStudentNo13 = doc.data().studentNo;
    const fieldSurname13 = doc.data().surname;
    const fieldName13 = doc.data().name;
    const selectedFunding13 = doc.data().bs;
    const selectedYear13 = doc.data().year;

    document.getElementById('studentNo13').value = fieldStudentNo13;
    document.getElementById('surname13').value = fieldSurname13;
    document.getElementById('name13').value = fieldName13;
    document.getElementById('bs13').value = selectedFunding13;
    document.getElementById('year13').value = selectedYear13;
});

onSnapshot(docRef14, (doc) => {
    const fieldStudentNo14 = doc.data().studentNo;
    const fieldSurname14 = doc.data().surname;
    const fieldName14 = doc.data().name;
    const selectedFunding14 = doc.data().bs;
    const selectedYear14 = doc.data().year;

    document.getElementById('studentNo14').value = fieldStudentNo14;
    document.getElementById('surname14').value = fieldSurname14;
    document.getElementById('name14').value = fieldName14;
    document.getElementById('bs14').value = selectedFunding14;
    document.getElementById('year14').value = selectedYear14;
});

onSnapshot(docRef15, (doc) => {
    const fieldStudentNo15 = doc.data().studentNo;
    const fieldSurname15 = doc.data().surname;
    const fieldName15 = doc.data().name;
    const selectedFunding15 = doc.data().bs;
    const selectedYear15 = doc.data().year;

    document.getElementById('studentNo15').value = fieldStudentNo15;
    document.getElementById('surname15').value = fieldSurname15;
    document.getElementById('name15').value = fieldName15;
    document.getElementById('bs15').value = selectedFunding15;
    document.getElementById('year15').value = selectedYear15;
});

onSnapshot(docRef16, (doc) => {
    const fieldStudentNo16 = doc.data().studentNo;
    const fieldSurname16 = doc.data().surname;
    const fieldName16 = doc.data().name;
    const selectedFunding16 = doc.data().bs;
    const selectedYear16 = doc.data().year;

    document.getElementById('studentNo16').value = fieldStudentNo16;
    document.getElementById('surname16').value = fieldSurname16;
    document.getElementById('name16').value = fieldName16;
    document.getElementById('bs16').value = selectedFunding16;
    document.getElementById('year16').value = selectedYear16;
});

onSnapshot(docRef17, (doc) => {
    const fieldStudentNo17 = doc.data().studentNo;
    const fieldSurname17 = doc.data().surname;
    const fieldName17 = doc.data().name;
    const selectedFunding17 = doc.data().bs;
    const selectedYear17 = doc.data().year;

    document.getElementById('studentNo17').value = fieldStudentNo17;
    document.getElementById('surname17').value = fieldSurname17;
    document.getElementById('name17').value = fieldName17;
    document.getElementById('bs17').value = selectedFunding17;
    document.getElementById('year17').value = selectedYear17;
});

onSnapshot(docRef18, (doc) => {
    const fieldStudentNo18 = doc.data().studentNo;
    const fieldSurname18 = doc.data().surname;
    const fieldName18 = doc.data().name;
    const selectedFunding18 = doc.data().bs;
    const selectedYear18 = doc.data().year;

    document.getElementById('studentNo18').value = fieldStudentNo18;
    document.getElementById('surname18').value = fieldSurname18;
    document.getElementById('name18').value = fieldName18;
    document.getElementById('bs18').value = selectedFunding18;
    document.getElementById('year18').value = selectedYear18;
});

onSnapshot(docRef19, (doc) => {
    const fieldStudentNo19 = doc.data().studentNo;
    const fieldSurname19 = doc.data().surname;
    const fieldName19 = doc.data().name;
    const selectedFunding19 = doc.data().bs;
    const selectedYear19 = doc.data().year;

    document.getElementById('studentNo19').value = fieldStudentNo19;
    document.getElementById('surname19').value = fieldSurname19;
    document.getElementById('name19').value = fieldName19;
    document.getElementById('bs19').value = selectedFunding19;
    document.getElementById('year19').value = selectedYear19;
});

onSnapshot(docRef20, (doc) => {
    const fieldStudentNo20 = doc.data().studentNo;
    const fieldSurname20 = doc.data().surname;
    const fieldName20 = doc.data().name;
    const selectedFunding20 = doc.data().bs;
    const selectedYear20 = doc.data().year;

    document.getElementById('studentNo20').value = fieldStudentNo20;
    document.getElementById('surname20').value = fieldSurname20;
    document.getElementById('name20').value = fieldName20;
    document.getElementById('bs20').value = selectedFunding20;
    document.getElementById('year20').value = selectedYear20;
});