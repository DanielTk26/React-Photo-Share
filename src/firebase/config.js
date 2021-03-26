import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDF9eZasV0iEyIQb0hNtmGGEjEM6hantX0",
  authDomain: "react-photo-share-b74b9.firebaseapp.com",
  databaseURL: "https://react-photo-share-b74b9-default-rtdb.firebaseio.com",
  projectId: "react-photo-share-b74b9",
  storageBucket: "react-photo-share-b74b9.appspot.com",
  messagingSenderId: "187490381573",
  appId: "1:187490381573:web:f2f9747da4e8e06424916c"
};


firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };