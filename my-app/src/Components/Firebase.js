import React from 'react';
import firebase from 'firebase';
{/* <script src="https://www.gstatic.com/firebasejs/5.8.5/firebase.js"></script> */}
  
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDwZrw8bda6iCPBV5acCpzMtjgD4q04WN8",
    authDomain: "websitecontactform-8e3a8.firebaseapp.com",
    databaseURL: "https://websitecontactform-8e3a8.firebaseio.com",
    projectId: "websitecontactform-8e3a8",
    storageBucket: "websitecontactform-8e3a8.appspot.com",
    messagingSenderId: "299385236950"
  };
  firebase.initializeApp(config);

  export default firebase;
