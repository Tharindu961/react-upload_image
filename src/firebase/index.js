import firebase from  'firebase/app';
import 'firebase/storage';

 // Your web app's Firebase configuration
 var config = {
    apiKey: "AIzaSyDFygPb72R8CAFAKhlXh6q7V-SHGcmdPU0",
    authDomain: "react-uploadimage.firebaseapp.com",
    databaseURL: "https://react-uploadimage.firebaseio.com",
    projectId: "react-uploadimage",
    storageBucket: "react-uploadimage.appspot.com",
    messagingSenderId: "204043728231",
    appId: "1:204043728231:web:99a43419ab0c12dfbf2bc2",
    measurementId: "G-TXPCBJH3XX"
  };

  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }