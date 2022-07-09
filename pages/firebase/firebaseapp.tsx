import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getDatabase,  ref, set } from "firebase/database";
import {useEffect, useState }  from 'react';

function firebaseapp() {
    
    const firebaseConfig = {
        apiKey: 'AIzaSyBQ4wT9Qb8eq5UIZlEbMPYxrnpiuls6p6I',
        databaseURL: 'https://radiant-heat-2428.firebaseio.com/',
        projectId: 'radiant-heat-2428',
        messagingSenderId: '336943587286'
      };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const database = getDatabase();
    let ref = database.ref("/radiant-heat-2428");


    useEffect(()=>{
        console.log(database);
    },[]);

    return (
        <h1>Helo</h1>
    )
}
import { format } from "path";

export default firebaseapp;