import React from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,
    addDoc, deleteDoc , doc
 } from 'firebase/firestore/lite';


// getFirestore is use to setup the firebase batabase
// collection its a reference to the collection 
// getDocs is used to fetch the data from the collection stored in the db
// addDoc is used tp put the content to the db
// deleteDoc is used to delete data from the the but before that we need a refernce to the object
// doc is used to refernce to the object



export default function Firebase() {
   
    //configuration of the firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDoQy5Z-k2COIrp16XREEhWYcUzF96Jc1c",
        authDomain: "newsapi-35fb0.firebaseapp.com",
        projectId: "newsapi-35fb0",
        storageBucket: "newsapi-35fb0.firebasestorage.app",
        messagingSenderId: "1072295158124",
        appId: "1:1072295158124:web:b7855a358a1587b318d349",
        measurementId: "G-W0NZS61JQD"
    };
    //first step to initialize the firebase
    initializeApp(firebaseConfig);

    //get a refernce db variable 
    const db = getFirestore()

    //fetching the data from the collection
    const colRef = collection(db, 'news_item')

    //try to fetch every collection with name news_item
    getDocs(colRef)
        .then((snapshot) => {
            let news_item = []
            snapshot.docs.forEach(element => {
                news_item.push({ ...element.data(), id: element.id })
            });
            console.log(news_item)
        })
        .catch(err => {
            console.log(err)
        })

    addDoc(colRef,{
        title:"hello",
        description :"hellll"
    })

    return (
        <div>Firebase</div>
    )
}
