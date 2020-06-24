import firebase from 'firebase';

// My web app's Firebase configuration
var config = {
      apiKey: "AIzaSyBnuxr8gtSa_tX1Fs2wk_OfDtoCpVqJ1uk",
      authDomain: "loterie-73336.firebaseapp.com",
      databaseURL: "https://loterie-73336.firebaseio.com",
      projectId: "loterie-73336",
      storageBucket: "loterie-73336.appspot.com",
      messagingSenderId: "362376477806",
      appId: "1:362376477806:web:9827416aab616e73437a7f",
      measurementId: "G-CQ96CKCBMS"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
//   firebase.analytics();

export default firebase;
