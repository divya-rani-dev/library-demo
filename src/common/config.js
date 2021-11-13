// import * as firebase from 'firebase'

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyBoVJkbXwfS4O9yZ7BFw_O3fuIcAt4wEsI",
  authDomain: "divya-books.firebaseapp.com",
  projectId: "divya-books",
  storageBucket: "divya-books.appspot.com",
  messagingSenderId: "938160194919",
  appId: "1:938160194919:web:54beb7cc567c98c4379bc2",
  measurementId: "G-KY88LNS0QD"
}

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore();

db.enablePersistence()
  .catch((err) => {
    console.error('Firebase error code is ', err);
    if (err.code == 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
const auth = firebase.auth()

// collection references
const booksCollection = db.collection('books')
const ordersCollection = db.collection('Orders')
const userCollection = db.collection('user')

export {
  db,
  auth,
  booksCollection,
  ordersCollection,
  userCollection
}