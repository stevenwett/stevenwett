import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import firebase from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyDPVQbdE5dpF4vFQ2jjh6meXqwxrLRmBfI",
//   authDomain: "stevenwett-884da.firebaseapp.com",
//   projectId: "stevenwett-884da",
//   storageBucket: "stevenwett-884da.appspot.com",
//   messagingSenderId: "291190492432",
//   appId: "1:291190492432:web:f575ee8229d38e59eae995",
//   measurementId: "G-J18MSMVZ32"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('main')
);
