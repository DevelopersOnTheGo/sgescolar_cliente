import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAFlr0h56BEe-p2SJISz_hT9jqe806i2h0',
  authDomain: 'sgescolar-76fec.firebaseapp.com',
  databaseURL: 'https://sgescolar-76fec.firebaseio.com',
  projectId: 'sgescolar-76fec',
  storageBucket: 'sgescolar-76fec.appspot.com',
  messagingSenderId: '264727336068',
});

export default {
  db: firebaseApp.database(),
};
