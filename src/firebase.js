import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDXDcETcr3hg26Xf5xBGgPeZ5SSYm2lu_M",
    authDomain: "kilowar-server.firebaseapp.com",
    databaseURL: "https://kilowar-server-default-rtdb.firebaseio.com",
    projectId: "kilowar-server",
    storageBucket: "kilowar-server.appspot.com",
    messagingSenderId: "423584228942",
    appId: "1:423584228942:web:5e018650929bc567c5051f",
    measurementId: "G-PG4D7N3400"
  };
 var fireDb =  firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();