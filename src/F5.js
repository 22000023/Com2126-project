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
const colRef = collection(db, 'F5.Residence');
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

    // For Document reference 21
    const room21 = document.getElementById('room21').innerText;
    const floor21 = document.getElementById('floor21').innerText;
    const block21 = document.getElementById('block21').innerText;
    const studentNo21 = document.getElementById('studentNo21').value;
    const surname21 = document.getElementById('surname21').value;
    const name21 = document.getElementById('name21').value;
    const bs21 = document.getElementById('bs21').value;
    const year21 = document.getElementById('year21').value;

    // For Document reference 22
    const room22 = document.getElementById('room22').innerText;
    const floor22 = document.getElementById('floor22').innerText;
    const block22 = document.getElementById('block22').innerText;
    const studentNo22 = document.getElementById('studentNo22').value;
    const surname22 = document.getElementById('surname22').value;
    const name22 = document.getElementById('name22').value;
    const bs22 = document.getElementById('bs22').value;
    const year22 = document.getElementById('year22').value;

    // For Document reference 23
    const room23 = document.getElementById('room23').innerText;
    const floor23 = document.getElementById('floor23').innerText;
    const block23 = document.getElementById('block23').innerText;
    const studentNo23 = document.getElementById('studentNo23').value;
    const surname23 = document.getElementById('surname23').value;
    const name23 = document.getElementById('name23').value;
    const bs23 = document.getElementById('bs23').value;
    const year23 = document.getElementById('year23').value;

    // For Document reference 24
    const room24 = document.getElementById('room24').innerText;
    const floor24 = document.getElementById('floor24').innerText;
    const block24 = document.getElementById('block24').innerText;
    const studentNo24 = document.getElementById('studentNo24').value;
    const surname24 = document.getElementById('surname24').value;
    const name24 = document.getElementById('name24').value;
    const bs24 = document.getElementById('bs24').value;
    const year24 = document.getElementById('year24').value;

    // For Document reference 25
    const room25 = document.getElementById('room25').innerText;
    const floor25 = document.getElementById('floor25').innerText;
    const block25 = document.getElementById('block25').innerText;
    const studentNo25 = document.getElementById('studentNo25').value;
    const surname25 = document.getElementById('surname25').value;
    const name25 = document.getElementById('name25').value;
    const bs25 = document.getElementById('bs25').value;
    const year25 = document.getElementById('year25').value;

    // For Document reference 26
    const room26 = document.getElementById('room26').innerText;
    const floor26 = document.getElementById('floor26').innerText;
    const block26 = document.getElementById('block26').innerText;
    const studentNo26 = document.getElementById('studentNo26').value;
    const surname26 = document.getElementById('surname26').value;
    const name26 = document.getElementById('name26').value;
    const bs26 = document.getElementById('bs26').value;
    const year26 = document.getElementById('year26').value;

    // For Document reference 27
    const room27 = document.getElementById('room27').innerText;
    const floor27 = document.getElementById('floor27').innerText;
    const block27 = document.getElementById('block27').innerText;
    const studentNo27 = document.getElementById('studentNo27').value;
    const surname27 = document.getElementById('surname27').value;
    const name27 = document.getElementById('name27').value;
    const bs27 = document.getElementById('bs27').value;
    const year27 = document.getElementById('year27').value;

    // For Document reference 28
    const room28 = document.getElementById('room28').innerText;
    const floor28 = document.getElementById('floor28').innerText;
    const block28 = document.getElementById('block28').innerText;
    const studentNo28 = document.getElementById('studentNo28').value;
    const surname28 = document.getElementById('surname28').value;
    const name28 = document.getElementById('name28').value;
    const bs28 = document.getElementById('bs28').value;
    const year28 = document.getElementById('year28').value;

    // For Document reference 29
    const room29 = document.getElementById('room29').innerText;
    const floor29 = document.getElementById('floor29').innerText;
    const block29 = document.getElementById('block29').innerText;
    const studentNo29 = document.getElementById('studentNo29').value;
    const surname29 = document.getElementById('surname29').value;
    const name29 = document.getElementById('name29').value;
    const bs29 = document.getElementById('bs29').value;
    const year29 = document.getElementById('year29').value;

    // For Document reference 30
    const room30 = document.getElementById('room30').innerText;
    const floor30 = document.getElementById('floor30').innerText;
    const block30 = document.getElementById('block30').innerText;
    const studentNo30 = document.getElementById('studentNo30').value;
    const surname30 = document.getElementById('surname30').value;
    const name30 = document.getElementById('name30').value;
    const bs30 = document.getElementById('bs30').value;
    const year30 = document.getElementById('year30').value;

    // For Document reference 31
    const room31 = document.getElementById('room31').innerText;
    const floor31 = document.getElementById('floor31').innerText;
    const block31 = document.getElementById('block31').innerText;
    const studentNo31 = document.getElementById('studentNo31').value;
    const surname31 = document.getElementById('surname31').value;
    const name31 = document.getElementById('name31').value;
    const bs31 = document.getElementById('bs31').value;
    const year31 = document.getElementById('year31').value;

    // For Document reference 32
    const room32 = document.getElementById('room32').innerText;
    const floor32 = document.getElementById('floor32').innerText;
    const block32 = document.getElementById('block32').innerText;
    const studentNo32 = document.getElementById('studentNo32').value;
    const surname32 = document.getElementById('surname32').value;
    const name32 = document.getElementById('name32').value;
    const bs32 = document.getElementById('bs32').value;
    const year32 = document.getElementById('year32').value;

    // For Document reference 33
    const room33 = document.getElementById('room33').innerText;
    const floor33 = document.getElementById('floor33').innerText;
    const block33 = document.getElementById('block33').innerText;
    const studentNo33 = document.getElementById('studentNo33').value;
    const surname33 = document.getElementById('surname33').value;
    const name33 = document.getElementById('name33').value;
    const bs33 = document.getElementById('bs33').value;
    const year33 = document.getElementById('year33').value;

    // For Document reference 34
    const room34 = document.getElementById('room34').innerText;
    const floor34 = document.getElementById('floor34').innerText;
    const block34 = document.getElementById('block34').innerText;
    const studentNo34 = document.getElementById('studentNo34').value;
    const surname34 = document.getElementById('surname34').value;
    const name34 = document.getElementById('name34').value;
    const bs34 = document.getElementById('bs34').value;
    const year34 = document.getElementById('year34').value;

    // For Document reference 35
    const room35 = document.getElementById('room35').innerText;
    const floor35 = document.getElementById('floor35').innerText;
    const block35 = document.getElementById('block35').innerText;
    const studentNo35 = document.getElementById('studentNo35').value;
    const surname35 = document.getElementById('surname35').value;
    const name35 = document.getElementById('name35').value;
    const bs35 = document.getElementById('bs35').value;
    const year35 = document.getElementById('year35').value;

    // For Document reference 36
    const room36 = document.getElementById('room36').innerText;
    const floor36 = document.getElementById('floor36').innerText;
    const block36 = document.getElementById('block36').innerText;
    const studentNo36 = document.getElementById('studentNo36').value;
    const surname36 = document.getElementById('surname36').value;
    const name36 = document.getElementById('name36').value;
    const bs36 = document.getElementById('bs36').value;
    const year36 = document.getElementById('year36').value;

    // For Document reference 37
    const room37 = document.getElementById('room37').innerText;
    const floor37 = document.getElementById('floor37').innerText;
    const block37 = document.getElementById('block37').innerText;
    const studentNo37 = document.getElementById('studentNo37').value;
    const surname37 = document.getElementById('surname37').value;
    const name37 = document.getElementById('name37').value;
    const bs37 = document.getElementById('bs37').value;
    const year37 = document.getElementById('year37').value;

    // For Document reference 38
    const room38 = document.getElementById('room38').innerText;
    const floor38 = document.getElementById('floor38').innerText;
    const block38 = document.getElementById('block38').innerText;
    const studentNo38 = document.getElementById('studentNo38').value;
    const surname38 = document.getElementById('surname38').value;
    const name38 = document.getElementById('name38').value;
    const bs38 = document.getElementById('bs38').value;
    const year38 = document.getElementById('year38').value;

    // For Document reference 39
    const room39 = document.getElementById('room39').innerText;
    const floor39 = document.getElementById('floor39').innerText;
    const block39 = document.getElementById('block39').innerText;
    const studentNo39 = document.getElementById('studentNo39').value;
    const surname39 = document.getElementById('surname39').value;
    const name39 = document.getElementById('name39').value;
    const bs39 = document.getElementById('bs39').value;
    const year39 = document.getElementById('year39').value;

    // For Document reference 40
    const room40 = document.getElementById('room40').innerText;
    const floor40 = document.getElementById('floor40').innerText;
    const block40 = document.getElementById('block40').innerText;
    const studentNo40 = document.getElementById('studentNo40').value;
    const surname40 = document.getElementById('surname40').value;
    const name40 = document.getElementById('name40').value;
    const bs40 = document.getElementById('bs40').value;
    const year40 = document.getElementById('year40').value;

    // Reference to the document you want to update
    const roomDocRef = doc(db, 'F5.Residence', 'roomNo');
    const roomDocRef2 = doc(db, 'F5.Residence', 'roomNo2');
    const roomDocRef3 = doc(db, 'F5.Residence', 'roomNo3');
    const roomDocRef4 = doc(db, 'F5.Residence', 'roomNo4');
    const roomDocRef5 = doc(db, 'F5.Residence', 'roomNo5');
    const roomDocRef6 = doc(db, 'F5.Residence', 'roomNo6');
    const roomDocRef7 = doc(db, 'F5.Residence', 'roomNo7');
    const roomDocRef8 = doc(db, 'F5.Residence', 'roomNo8');
    const roomDocRef9 = doc(db, 'F5.Residence', 'roomNo9');
    const roomDocRef10 = doc(db, 'F5.Residence', 'roomNo10');
    const roomDocRef11 = doc(db, 'F5.Residence', 'roomNo11');
    const roomDocRef12 = doc(db, 'F5.Residence', 'roomNo12');
    const roomDocRef13 = doc(db, 'F5.Residence', 'roomNo13');
    const roomDocRef14 = doc(db, 'F5.Residence', 'roomNo14');
    const roomDocRef15 = doc(db, 'F5.Residence', 'roomNo15');
    const roomDocRef16 = doc(db, 'F5.Residence', 'roomNo16');
    const roomDocRef17 = doc(db, 'F5.Residence', 'roomNo17');
    const roomDocRef18 = doc(db, 'F5.Residence', 'roomNo18');
    const roomDocRef19 = doc(db, 'F5.Residence', 'roomNo19');
    const roomDocRef20 = doc(db, 'F5.Residence', 'roomNo20');
    const roomDocRef21 = doc(db, 'F5.Residence', 'roomNo21');
    const roomDocRef22 = doc(db, 'F5.Residence', 'roomNo22');
    const roomDocRef23 = doc(db, 'F5.Residence', 'roomNo23');
    const roomDocRef24 = doc(db, 'F5.Residence', 'roomNo24');
    const roomDocRef25 = doc(db, 'F5.Residence', 'roomNo25');
    const roomDocRef26 = doc(db, 'F5.Residence', 'roomNo26');
    const roomDocRef27 = doc(db, 'F5.Residence', 'roomNo27');
    const roomDocRef28 = doc(db, 'F5.Residence', 'roomNo28');
    const roomDocRef29 = doc(db, 'F5.Residence', 'roomNo29');
    const roomDocRef30 = doc(db, 'F5.Residence', 'roomNo30');
    const roomDocRef31 = doc(db, 'F5.Residence', 'roomNo31');
    const roomDocRef32 = doc(db, 'F5.Residence', 'roomNo32');
    const roomDocRef33 = doc(db, 'F5.Residence', 'roomNo33');
    const roomDocRef34 = doc(db, 'F5.Residence', 'roomNo34');
    const roomDocRef35 = doc(db, 'F5.Residence', 'roomNo35');
    const roomDocRef36 = doc(db, 'F5.Residence', 'roomNo36');
    const roomDocRef37 = doc(db, 'F5.Residence', 'roomNo37');
    const roomDocRef38 = doc(db, 'F5.Residence', 'roomNo38');
    const roomDocRef39 = doc(db, 'F5.Residence', 'roomNo39');
    const roomDocRef40 = doc(db, 'F5.Residence', 'roomNo40');

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

    // Document reference 21
    updatePromises.push(updateDoc(roomDocRef21,{
        room: room21,
        floor: floor21,
        block: block21,
        studentNo: studentNo21,
        surname: surname21,
        name: name21,
        bs: bs21,
        year: year21
    }));

    // Document reference 22
    updatePromises.push(updateDoc(roomDocRef22,{
        room: room22,
        floor: floor22,
        block: block22,
        studentNo: studentNo22,
        surname: surname22,
        name: name22,
        bs: bs22,
        year: year22
    }));

    // Document reference 23
    updatePromises.push(updateDoc(roomDocRef23,{
        room: room23,
        floor: floor23,
        block: block23,
        studentNo: studentNo23,
        surname: surname23,
        name: name23,
        bs: bs23,
        year: year23
    }));

    // Document reference 24
    updatePromises.push(updateDoc(roomDocRef24,{
        room: room24,
        floor: floor24,
        block: block24,
        studentNo: studentNo24,
        surname: surname24,
        name: name24,
        bs: bs24,
        year: year24
    }));

    // Document reference 25
    updatePromises.push(updateDoc(roomDocRef25,{
        room: room25,
        floor: floor25,
        block: block25,
        studentNo: studentNo25,
        surname: surname25,
        name: name25,
        bs: bs25,
        year: year25
    }));

    // Document reference 26
    updatePromises.push(updateDoc(roomDocRef26,{
        room: room26,
        floor: floor26,
        block: block26,
        studentNo: studentNo26,
        surname: surname26,
        name: name26,
        bs: bs26,
        year: year26
    }));

    // Document reference 27
    updatePromises.push(updateDoc(roomDocRef27,{
        room: room27,
        floor: floor27,
        block: block27,
        studentNo: studentNo27,
        surname: surname27,
        name: name27,
        bs: bs27,
        year: year27
    }));

    // Document reference 28
    updatePromises.push(updateDoc(roomDocRef28,{
        room: room28,
        floor: floor28,
        block: block28,
        studentNo: studentNo28,
        surname: surname28,
        name: name28,
        bs: bs28,
        year: year28
    }));

    // Document reference 29
    updatePromises.push(updateDoc(roomDocRef29,{
        room: room29,
        floor: floor29,
        block: block29,
        studentNo: studentNo29,
        surname: surname29,
        name: name29,
        bs: bs29,
        year: year29
    }));

    // Document reference 30
    updatePromises.push(updateDoc(roomDocRef30,{
        room: room30,
        floor: floor30,
        block: block30,
        studentNo: studentNo30,
        surname: surname30,
        name: name30,
        bs: bs30,
        year: year30
    }));

    // Document reference 31
    updatePromises.push(updateDoc(roomDocRef31,{
        room: room31,
        floor: floor31,
        block: block31,
        studentNo: studentNo31,
        surname: surname31,
        name: name31,
        bs: bs31,
        year: year31
    }));

    // Document reference 32
    updatePromises.push(updateDoc(roomDocRef32,{
        room: room32,
        floor: floor32,
        block: block32,
        studentNo: studentNo32,
        surname: surname32,
        name: name32,
        bs: bs32,
        year: year32
    }));

    // Document reference 33
    updatePromises.push(updateDoc(roomDocRef33,{
        room: room33,
        floor: floor33,
        block: block33,
        studentNo: studentNo33,
        surname: surname33,
        name: name33,
        bs: bs33,
        year: year33
    }));

    // Document reference 34
    updatePromises.push(updateDoc(roomDocRef34,{
        room: room34,
        floor: floor34,
        block: block34,
        studentNo: studentNo34,
        surname: surname34,
        name: name34,
        bs: bs34,
        year: year34
    }));

    // Document reference 35
    updatePromises.push(updateDoc(roomDocRef35,{
        room: room35,
        floor: floor35,
        block: block35,
        studentNo: studentNo35,
        surname: surname35,
        name: name35,
        bs: bs35,
        year: year35
    }));

    // Document reference 36
    updatePromises.push(updateDoc(roomDocRef36,{
        room: room36,
        floor: floor36,
        block: block36,
        studentNo: studentNo36,
        surname: surname36,
        name: name36,
        bs: bs36,
        year: year36
    }));

    // Document reference 37
    updatePromises.push(updateDoc(roomDocRef37,{
        room: room37,
        floor: floor37,
        block: block37,
        studentNo: studentNo37,
        surname: surname37,
        name: name37,
        bs: bs37,
        year: year37
    }));

    // Document reference 38
    updatePromises.push(updateDoc(roomDocRef38,{
        room: room38,
        floor: floor38,
        block: block38,
        studentNo: studentNo38,
        surname: surname38,
        name: name38,
        bs: bs38,
        year: year38
    }));

    // Document reference 39
    updatePromises.push(updateDoc(roomDocRef39,{
        room: room39,
        floor: floor39,
        block: block39,
        studentNo: studentNo39,
        surname: surname39,
        name: name39,
        bs: bs39,
        year: year39
    }));

    // Document reference 40
    updatePromises.push(updateDoc(roomDocRef40,{
        room: room40,
        floor: floor40,
        block: block40,
        studentNo: studentNo40,
        surname: surname40,
        name: name40,
        bs: bs40,
        year: year40
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
    const docRef = doc(db, 'F5.Residence', 'roomNo');
    const docRef2 = doc(db, 'F5.Residence', 'roomNo2');
    const docRef3 = doc(db, 'F5.Residence', 'roomNo3');
    const docRef4 = doc(db, 'F5.Residence', 'roomNo4');
    const docRef5 = doc(db, 'F5.Residence', 'roomNo5');
    const docRef6 = doc(db, 'F5.Residence', 'roomNo6');
    const docRef7 = doc(db, 'F5.Residence', 'roomNo7');
    const docRef8 = doc(db, 'F5.Residence', 'roomNo8');
    const docRef9 = doc(db, 'F5.Residence', 'roomNo9');
    const docRef10 = doc(db, 'F5.Residence', 'roomNo10');
    const docRef11 = doc(db, 'F5.Residence', 'roomNo11');
    const docRef12 = doc(db, 'F5.Residence', 'roomNo12');
    const docRef13 = doc(db, 'F5.Residence', 'roomNo13');
    const docRef14 = doc(db, 'F5.Residence', 'roomNo14');
    const docRef15 = doc(db, 'F5.Residence', 'roomNo15');
    const docRef16 = doc(db, 'F5.Residence', 'roomNo16');
    const docRef17 = doc(db, 'F5.Residence', 'roomNo17');
    const docRef18 = doc(db, 'F5.Residence', 'roomNo18');
    const docRef19 = doc(db, 'F5.Residence', 'roomNo19');
    const docRef20 = doc(db, 'F5.Residence', 'roomNo20');
    const docRef21 = doc(db, 'F5.Residence', 'roomNo21');
    const docRef22 = doc(db, 'F5.Residence', 'roomNo22');
    const docRef23 = doc(db, 'F5.Residence', 'roomNo23');
    const docRef24 = doc(db, 'F5.Residence', 'roomNo24');
    const docRef25 = doc(db, 'F5.Residence', 'roomNo25');
    const docRef26 = doc(db, 'F5.Residence', 'roomNo26');
    const docRef27 = doc(db, 'F5.Residence', 'roomNo27');
    const docRef28 = doc(db, 'F5.Residence', 'roomNo28');
    const docRef29 = doc(db, 'F5.Residence', 'roomNo29');
    const docRef30 = doc(db, 'F5.Residence', 'roomNo30');
    const docRef31 = doc(db, 'F5.Residence', 'roomNo31');
    const docRef32 = doc(db, 'F5.Residence', 'roomNo32');
    const docRef33 = doc(db, 'F5.Residence', 'roomNo33');
    const docRef34 = doc(db, 'F5.Residence', 'roomNo34');
    const docRef35 = doc(db, 'F5.Residence', 'roomNo35');
    const docRef36 = doc(db, 'F5.Residence', 'roomNo36');
    const docRef37 = doc(db, 'F5.Residence', 'roomNo37');
    const docRef38 = doc(db, 'F5.Residence', 'roomNo38');
    const docRef39 = doc(db, 'F5.Residence', 'roomNo39');
    const docRef40 = doc(db, 'F5.Residence', 'roomNo40');

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

    onSnapshot(docRef21, (doc) => {
        const fieldStudentNo21 = doc.data().studentNo;
        const fieldSurname21 = doc.data().surname;
        const fieldName21 = doc.data().name;
        const selectedFunding21 = doc.data().bs;
        const selectedYear21 = doc.data().year;

        document.getElementById('studentNo21').value = fieldStudentNo21;
        document.getElementById('surname21').value = fieldSurname21;
        document.getElementById('name21').value = fieldName21;
        document.getElementById('bs21').value = selectedFunding21;
        document.getElementById('year21').value = selectedYear21;
    });

    onSnapshot(docRef22, (doc) => {
        const fieldStudentNo22 = doc.data().studentNo;
        const fieldSurname22 = doc.data().surname;
        const fieldName22 = doc.data().name;
        const selectedFunding22 = doc.data().bs;
        const selectedYear22 = doc.data().year;

        document.getElementById('studentNo22').value = fieldStudentNo22;
        document.getElementById('surname22').value = fieldSurname22;
        document.getElementById('name22').value = fieldName22;
        document.getElementById('bs22').value = selectedFunding22;
        document.getElementById('year22').value = selectedYear22;

    });

    onSnapshot(docRef23, (doc) => {
        const fieldStudentNo23 = doc.data().studentNo;
        const fieldSurname23 = doc.data().surname;
        const fieldName23 = doc.data().name;
        const selectedFunding23 = doc.data().bs;
        const selectedYear23 = doc.data().year;

        document.getElementById('studentNo23').value = fieldStudentNo23;
        document.getElementById('surname23').value = fieldSurname23;
        document.getElementById('name23').value = fieldName23;
        document.getElementById('bs23').value = selectedFunding23;
        document.getElementById('year23').value = selectedYear23;
    });

    onSnapshot(docRef24, (doc) => {
        const fieldStudentNo24 = doc.data().studentNo;
        const fieldSurname24 = doc.data().surname;
        const fieldName24 = doc.data().name;
        const selectedFunding24 = doc.data().bs;
        const selectedYear24 = doc.data().year;

        document.getElementById('studentNo24').value = fieldStudentNo24;
        document.getElementById('surname24').value = fieldSurname24;
        document.getElementById('name24').value = fieldName24;
        document.getElementById('bs24').value = selectedFunding24;
        document.getElementById('year24').value = selectedYear24;
    });

    onSnapshot(docRef25, (doc) => {
        const fieldStudentNo25 = doc.data().studentNo;
        const fieldSurname25 = doc.data().surname;
        const fieldName25 = doc.data().name;
        const selectedFunding25 = doc.data().bs;
        const selectedYear25 = doc.data().year;

        document.getElementById('studentNo25').value = fieldStudentNo25;
        document.getElementById('surname25').value = fieldSurname25;
        document.getElementById('name25').value = fieldName25;
        document.getElementById('bs25').value = selectedFunding25;
        document.getElementById('year25').value = selectedYear25;
    });

    onSnapshot(docRef26, (doc) => {
        const fieldStudentNo26 = doc.data().studentNo;
        const fieldSurname26 = doc.data().surname;
        const fieldName26 = doc.data().name;
        const selectedFunding26 = doc.data().bs;
        const selectedYear26 = doc.data().year;

        document.getElementById('studentNo26').value = fieldStudentNo26;
        document.getElementById('surname26').value = fieldSurname26;
        document.getElementById('name26').value = fieldName26;
        document.getElementById('bs26').value = selectedFunding26;
        document.getElementById('year26').value = selectedYear26;
    });

    onSnapshot(docRef27, (doc) => {
        const fieldStudentNo27 = doc.data().studentNo;
        const fieldSurname27 = doc.data().surname;
        const fieldName27 = doc.data().name;
        const selectedFunding27 = doc.data().bs;
        const selectedYear27 = doc.data().year;

        document.getElementById('studentNo27').value = fieldStudentNo27;
        document.getElementById('surname27').value = fieldSurname27;
        document.getElementById('name27').value = fieldName27;
        document.getElementById('bs27').value = selectedFunding27;
        document.getElementById('year27').value = selectedYear27;
    });

    onSnapshot(docRef28, (doc) => {
        const fieldStudentNo28 = doc.data().studentNo;
        const fieldSurname28 = doc.data().surname;
        const fieldName28 = doc.data().name;
        const selectedFunding28 = doc.data().bs;
        const selectedYear28 = doc.data().year;

        document.getElementById('studentNo28').value = fieldStudentNo28;
        document.getElementById('surname28').value = fieldSurname28;
        document.getElementById('name28').value = fieldName28;
        document.getElementById('bs28').value = selectedFunding28;
        document.getElementById('year28').value = selectedYear28;
    });

    onSnapshot(docRef29, (doc) => {
        const fieldStudentNo29 = doc.data().studentNo;
        const fieldSurname29 = doc.data().surname;
        const fieldName29 = doc.data().name;
        const selectedFunding29 = doc.data().bs;
        const selectedYear29 = doc.data().year;

        document.getElementById('studentNo29').value = fieldStudentNo29;
        document.getElementById('surname29').value = fieldSurname29;
        document.getElementById('name29').value = fieldName29;
        document.getElementById('bs29').value = selectedFunding29;
        document.getElementById('year29').value = selectedYear29;
    });

    onSnapshot(docRef30, (doc) => {
        const fieldStudentNo30 = doc.data().studentNo;
        const fieldSurname30 = doc.data().surname;
        const fieldName30 = doc.data().name;
        const selectedFunding30 = doc.data().bs;
        const selectedYear30 = doc.data().year;

        document.getElementById('studentNo30').value = fieldStudentNo30;
        document.getElementById('surname30').value = fieldSurname30;
        document.getElementById('name30').value = fieldName30;
        document.getElementById('bs30').value = selectedFunding30;
        document.getElementById('year30').value = selectedYear30;
    });

    // Document reference 31
    onSnapshot(docRef31, (doc) => {
        const fieldStudentNo31 = doc.data().studentNo;
        const fieldSurname31 = doc.data().surname;
        const fieldName31 = doc.data().name;
        const selectedFunding31 = doc.data().bs;
        const selectedYear31 = doc.data().year;

        document.getElementById('studentNo31').value = fieldStudentNo31;
        document.getElementById('surname31').value = fieldSurname31;
        document.getElementById('name31').value = fieldName31;
        document.getElementById('bs31').value = selectedFunding31;
        document.getElementById('year31').value = selectedYear31;
    });

    // Document reference 32
    onSnapshot(docRef32, (doc) => {
        const fieldStudentNo32 = doc.data().studentNo;
        const fieldSurname32 = doc.data().surname;
        const fieldName32 = doc.data().name;
        const selectedFunding32 = doc.data().bs;
        const selectedYear32 = doc.data().year;

        document.getElementById('studentNo32').value = fieldStudentNo32;
        document.getElementById('surname32').value = fieldSurname32;
        document.getElementById('name32').value = fieldName32;
        document.getElementById('bs32').value = selectedFunding32;
        document.getElementById('year32').value = selectedYear32;
    });

    // Document reference 33
    onSnapshot(docRef33, (doc) => {
        const fieldStudentNo33 = doc.data().studentNo;
        const fieldSurname33 = doc.data().surname;
        const fieldName33 = doc.data().name;
        const selectedFunding33 = doc.data().bs;
        const selectedYear33 = doc.data().year;

        document.getElementById('studentNo33').value = fieldStudentNo33;
        document.getElementById('surname33').value = fieldSurname33;
        document.getElementById('name33').value = fieldName33;
        document.getElementById('bs33').value = selectedFunding33;
        document.getElementById('year33').value = selectedYear33;
    });

    // Document reference 34
    onSnapshot(docRef34, (doc) => {
        const fieldStudentNo34 = doc.data().studentNo;
        const fieldSurname34 = doc.data().surname;
        const fieldName34 = doc.data().name;
        const selectedFunding34 = doc.data().bs;
        const selectedYear34 = doc.data().year;

        document.getElementById('studentNo34').value = fieldStudentNo34;
        document.getElementById('surname34').value = fieldSurname34;
        document.getElementById('name34').value = fieldName34;
        document.getElementById('bs34').value = selectedFunding34;
        document.getElementById('year34').value = selectedYear34;
    });

    // Document reference 35
    onSnapshot(docRef35, (doc) => {
        const fieldStudentNo35 = doc.data().studentNo;
        const fieldSurname35 = doc.data().surname;
        const fieldName35 = doc.data().name;
        const selectedFunding35 = doc.data().bs;
        const selectedYear35 = doc.data().year;

        document.getElementById('studentNo35').value = fieldStudentNo35;
        document.getElementById('surname35').value = fieldSurname35;
        document.getElementById('name35').value = fieldName35;
        document.getElementById('bs35').value = selectedFunding35;
        document.getElementById('year35').value = selectedYear35;
    });

    // Document reference 36
    onSnapshot(docRef36, (doc) => {
        const fieldStudentNo36 = doc.data().studentNo;
        const fieldSurname36 = doc.data().surname;
        const fieldName36 = doc.data().name;
        const selectedFunding36 = doc.data().bs;
        const selectedYear36 = doc.data().year;

        document.getElementById('studentNo36').value = fieldStudentNo36;
        document.getElementById('surname36').value = fieldSurname36;
        document.getElementById('name36').value = fieldName36;
        document.getElementById('bs36').value = selectedFunding36;
        document.getElementById('year36').value = selectedYear36;
    });

    // Document reference 37
    onSnapshot(docRef37, (doc) => {
        const fieldStudentNo37 = doc.data().studentNo;
        const fieldSurname37 = doc.data().surname;
        const fieldName37 = doc.data().name;
        const selectedFunding37 = doc.data().bs;
        const selectedYear37 = doc.data().year;

        document.getElementById('studentNo37').value = fieldStudentNo37;
        document.getElementById('surname37').value = fieldSurname37;
        document.getElementById('name37').value = fieldName37;
        document.getElementById('bs37').value = selectedFunding37;
        document.getElementById('year37').value = selectedYear37;
    });

    // Document reference 38
    onSnapshot(docRef38, (doc) => {
        const fieldStudentNo38 = doc.data().studentNo;
        const fieldSurname38 = doc.data().surname;
        const fieldName38 = doc.data().name;
        const selectedFunding38 = doc.data().bs;
        const selectedYear38 = doc.data().year;

        document.getElementById('studentNo38').value = fieldStudentNo38;
        document.getElementById('surname38').value = fieldSurname38;
        document.getElementById('name38').value = fieldName38;
        document.getElementById('bs38').value = selectedFunding38;
        document.getElementById('year38').value = selectedYear38;
    });

    // Document reference 39
    onSnapshot(docRef39, (doc) => {
        const fieldStudentNo39 = doc.data().studentNo;
        const fieldSurname39 = doc.data().surname;
        const fieldName39 = doc.data().name;
        const selectedFunding39 = doc.data().bs;
        const selectedYear39 = doc.data().year;

        document.getElementById('studentNo39').value = fieldStudentNo39;
        document.getElementById('surname39').value = fieldSurname39;
        document.getElementById('name39').value = fieldName39;
        document.getElementById('bs39').value = selectedFunding39;
        document.getElementById('year39').value = selectedYear39;
    });

    // Document reference 40
    onSnapshot(docRef40, (doc) => {
        const fieldStudentNo40 = doc.data().studentNo;
        const fieldSurname40 = doc.data().surname;
        const fieldName40 = doc.data().name;
        const selectedFunding40 = doc.data().bs;
        const selectedYear40 = doc.data().year;

        document.getElementById('studentNo40').value = fieldStudentNo40;
        document.getElementById('surname40').value = fieldSurname40;
        document.getElementById('name40').value = fieldName40;
        document.getElementById('bs40').value = selectedFunding40;
        document.getElementById('year40').value = selectedYear40;
    });