import firebase from 'firebase';

  
// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyAtAwIgWnyqpIiKLCcI1tEz1XCwmoKKMxk",
        authDomain: "project-67-91c33.firebaseapp.com",
        projectId: "project-67-91c33",
        storageBucket: "project-67-91c33.appspot.com",
        messagingSenderId: "1085742650530",
        appId: "1:1085742650530:web:65b52431826e73078d33fb"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();