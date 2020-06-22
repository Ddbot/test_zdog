import firebase from 'firebase';

// My web app's Firebase configuration
var config = {
      apiKey: FIREBASE_API_KEY,
      authDomain: "loterie-73336.firebaseapp.com",
      databaseURL: "https://loterie-73336.firebaseio.com",
      projectId: "loterie-73336",
      storageBucket: "loterie-73336.appspot.com",
      messagingSenderId: "362376477806",
      appId: FIREBASE_APP_ID,
      measurementId: "G-CQ96CKCBMS"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
//   firebase.analytics();

export default firebase;
